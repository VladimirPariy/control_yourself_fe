import {classNames} from '@lib/utils/class-names';
import {InputHTMLAttributes} from 'react';

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  id?: string;
};

export function Input(props: InputProps) {
  const {type = 'text', label} = props;

  const input = (
    <span className="relative" id={props.id}>
      <input
        type={type}
        className={classNames(
          'bg-transparent border border-zinc-800/70 rounded-lg py-2 pl-4 pr-12  w-full h-11 hover:border-zinc-700 group-hover:border-zinc-700 transition-all duration-300',
          'outline-none focus:!border-zinc-400',
        )}
      />
    </span>
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
