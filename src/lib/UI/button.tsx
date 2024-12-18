import {classNames} from '@lib/utils/class-names';

type ButtonProps = {
  children: React.ReactNode;
  height?: 'low' | 'medium' | 'high';
  width?: 'narrow' | 'medium' | 'wide' | 'full';
};

export function Button(props: ButtonProps) {
  const {children, height = 'medium', width = 'full'} = props;
  return (
    <button
      className={classNames(
        'bg-zinc-800/70 hover:bg-zinc-800 text-white rounded-lg transition-all duration-300 min-w-fit px-2 flex justify-center items-center font-semibold',
        {low: 'h-5', medium: 'h-8', high: 'h-11'}[height],
        {narrow: 'w-16', medium: 'w-20', wide: 'w-24', full: 'w-full'}[width],
      )}>
      {children}
    </button>
  );
}
