import { CircularProgress, Grid, TextField } from "@material-ui/core";
import Autocomplete, { AutocompleteProps } from "@material-ui/lab/Autocomplete";
import useDebounce from "../../hooks/useDebounce";
import { ResponsePromise } from "ky";
import {
  ChangeEvent,
  SyntheticEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

export interface AsyncAutocompleteProps<
  T,
  Multiple extends boolean | undefined,
  DisableClearable extends boolean | undefined,
  FreeSolo extends boolean | undefined
> extends Omit<
    AutocompleteProps<T, Multiple, DisableClearable, FreeSolo>,
    "renderInput" | "options" | "value"
  > {
  loadOptions?: (
    name: string,
    offset: number,
    size: number
  ) => ResponsePromise | undefined;
  renderOptionCustom?: Function;
  label?: string;
  error?: boolean;
  helperText?: string;
  valueAccessor?: string;
  labelAccessor?: string;
  value?: any;
  id?: string;
  size?: "small" | "medium";
  fetchSize?: number;
  onChange?: (event: any, value: any, reason: string) => void;
  getOptionLabel?: (option: any) => any;
}

export const AsyncAutocompletePaginated = <
  T,
  Multiple extends boolean | undefined,
  DisableClearable extends boolean | undefined,
  FreeSolo extends boolean | undefined
>({
  loadOptions,
  renderOptionCustom = undefined,
  value: valueFilter = null,
  valueAccessor = "value",
  labelAccessor = "label",
  label = undefined,
  error = false,
  helperText = "",
  fetchSize = 15,
  ...props
}: AsyncAutocompleteProps<T, Multiple, DisableClearable, FreeSolo>) => {
  const [inputValue, setInputValue] = useState("");
  const [options, setOptions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [offset, setOffset] = useState(0);
  const _isMounted = useRef(true);
  const [nbItems, setNbItems] = useState<number>(0);
  const [keepGoing, setKeepGoing] = useState(true);

  const debouncedSearchTerm = useDebounce(inputValue, 500);

  useEffect(() => {
    return () => {
      // ComponentWillUnmount
      _isMounted.current = false;
    };
  }, []);

  const fetchData = useCallback(
    (input = "", offset) => {
      async function fetch(name: string, offset: number) {
        try {
          const result: { items: []; count: number } | undefined =
            loadOptions && (await loadOptions(name, offset, fetchSize)?.json());
          if (_isMounted.current && result) {
            setOffset(offset);
            // to prevent update state when component is unmount
            offset === 0
              ? setOptions(result.items)
              : setOptions((opt) => opt.concat(result.items));
            nbItems || setNbItems(result.count);
            setLoading(false);
          }
        } catch (e) {
          console.log(e);
          if (_isMounted.current) {
            // to prevent update state when component is unmount
            setOptions([]);
            setNbItems(0);
            setLoading(false);
          }
        }
      }

      setLoading(true);

      fetch(input, offset);
    },
    [loadOptions, fetchSize, nbItems]
  );

  useEffect(() => {
    setInputValue(valueFilter ? valueFilter[labelAccessor] : "");
  }, [valueFilter, labelAccessor]);

  useEffect(() => {
    options.length === nbItems && setKeepGoing(false);
  }, [nbItems, options.length]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const val: any = event.target.value;
    setInputValue(val[labelAccessor] || val);
  };

  const handleSelectChange = (event: any, value: any, reason: string) => {
    props.onChange && props.onChange(event, value, reason);
    const computedValue =
      value && value[labelAccessor] ? value[labelAccessor] : value;
    setInputValue(props.multiple || !computedValue ? "" : computedValue);
  };

  const renderOption = (option: any, state: any) => {
    if (renderOptionCustom) {
      return renderOptionCustom(option, state);
    }
    return (
      <Grid container alignItems='center'>
        <Grid item xs>
          {option && option[labelAccessor] ? option[labelAccessor] : option}
        </Grid>
      </Grid>
    );
  };

  useEffect(() => {
    if (
      !valueFilter ||
      debouncedSearchTerm === "" ||
      valueFilter.value !== debouncedSearchTerm
    ) {
      fetchData(inputValue, 0);
      setKeepGoing(true);
    }
    //needed to avoid inputValue missing warning
    // eslint-disable-next-line
  }, [debouncedSearchTerm, fetchData, valueFilter]);

  const controlledValue =
    valueFilter !== null ? { value: valueFilter } : { value: "" };
  return (
    <Grid container spacing={1}>
      <Grid item xs={9}>
        <Autocomplete
          filterOptions={(x) => x}
          getOptionSelected={(option) =>
            valueFilter && option === valueFilter[labelAccessor]
          }
          getOptionLabel={(option: any) =>
            option[labelAccessor] || option[labelAccessor] === ""
              ? option[labelAccessor]
              : option
          }
          {...controlledValue}
          {...props}
          options={options}
          onChange={handleSelectChange}
          openOnFocus
          loading={loading}
          ListboxProps={{
            //load more when scroll
            onScroll: (event: SyntheticEvent) => {
              const listboxNode = event.currentTarget;
              if (
                Math.round(listboxNode.scrollTop) + listboxNode.clientHeight ===
                listboxNode.scrollHeight
              ) {
                keepGoing && fetchData(inputValue, offset + fetchSize);
              }
            },
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              label={label}
              fullWidth
              error={error}
              helperText={helperText}
              onChange={handleChange}
              inputProps={{
                ...params.inputProps,
                value: inputValue,
              }}
              InputProps={{
                ...params.InputProps,
                endAdornment: (
                  <>
                    {loading && <CircularProgress color='inherit' size={20} />}
                    {params.InputProps.endAdornment}
                  </>
                ),
              }}
            />
          )}
          renderOption={renderOption}
        />
      </Grid>
    </Grid>
  );
};
