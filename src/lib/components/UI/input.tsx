import {classNames} from '@lib/utils/class-names';
import {InputHTMLAttributes} from 'react';

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  id?: string;
  error?: string;
};

export function Input(props: InputProps) {
  const {type = 'text', label, error, ...restProps} = props;

  const input = (
    <>
      <span className="relative" id={props.id}>
        <input
          type={type}
          className={classNames(
            'bg-transparent border border-zinc-800/70 rounded-lg py-2 pl-4 pr-12  w-full h-11 hover:border-zinc-700 group-hover:border-zinc-700 transition-all duration-300 outline-none focus:border-zinc-400',
            error && 'border-red-500 group-hover:border-red-400 focus:border-red-400'
          )}
          {...restProps}
        />
        {error && <div className="text-xs text-red-500 absolute bottom-[-20px] left-1">{error}</div>}
      </span>
    </>
  );

  if (label) {
    return (
      <label className="flex flex-col gap-3 text-white group cursor-text">
        <span>{label}</span>
        {input}
      </label>
    );
  }
  return input;
}
