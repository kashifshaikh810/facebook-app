interface IProps {
  type: string;
  className: any;
  value?: string;
  onChange?: Function;
  placeholder?: string;
  name: string;
}

const TextInput = (props: IProps) => {
  return (
    <div>
      <input
        type={props?.type}
        className={props.className}
        value={props?.value}
        onChange={(e: any) =>
          typeof props.onChange !== "undefined" &&
          props.onChange(e.target.value)
        }
        placeholder={props?.placeholder}
        name={props?.name}
      />
    </div>
  );
};

export default TextInput;
