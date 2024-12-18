import {Button} from '@lib/UI/button';
import {Input} from '@lib/UI/input';

export function LoginForm() {
  return (
    <form className="flex flex-col gap-6">
      <Input label="Email" />
      <Input label="Password" />
      <Button height="high">Login</Button>
    </form>
  );
}
