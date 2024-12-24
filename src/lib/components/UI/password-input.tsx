import {EyeIcon} from '@assets/icons/eye';
import {Input, InputProps} from './input';
import {HTMLInputTypeAttribute, useEffect, useState} from 'react';
import {createPortal} from 'react-dom';
import {EyeSlashIcon} from '@assets/icons/eye-slash';

export function PasswordInput(props: InputProps & {id: string}) {
  const [elem, setElem] = useState<HTMLElement | null>(null);
  const [type, setType] = useState<HTMLInputTypeAttribute>('password');

  useEffect(() => {
    if (!document) return;
    const inputParent = document.getElementById(props.id);
    setElem(inputParent);
  }, []);

  function onToggleType() {
    if (type === 'password') {
      setType('text');
    } else {
      setType('password');
    }
  }

  if (elem) {
    const iconStyles =
      'text-zinc-800/70 group-hover:text-zinc-700 hover:scale-110 hover:!text-zinc-400 transition-all duration-300';
    return (
      <>
        <Input {...props} type={type} />
        {createPortal(
          <span className="absolute top-1/2 right-4 -translate-y-1/2 cursor-pointer" onClick={onToggleType}>
            {type === 'password' ? <EyeIcon className={iconStyles} /> : <EyeSlashIcon className={iconStyles} />}
          </span>,
          elem
        )}
      </>
    );
  }

  return <Input {...props} />;
}
