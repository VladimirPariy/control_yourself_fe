import {classNames} from '@lib/utils/class-names';

type InputProps = {
  label?: string;
};

export function Input(props: InputProps) {
  const input = (
    <input
      type="text"
      className={classNames(
        'bg-transparent border border-zinc-800/70 rounded-lg py-2 px-4 w-full h-11 hover:border-zinc-700 group-hover:border-zinc-700 transition-all duration-300',
      )}
    />
  );

  if (props.label) {
    return (
      <label className="flex flex-col gap-3 text-white group cursor-text">
        <span>{props.label}</span>
        {input}
      </label>
    );
  }
  return input;
}
