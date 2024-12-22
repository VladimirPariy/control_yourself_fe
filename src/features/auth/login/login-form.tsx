import {Button} from '@lib/UI/button';
import {Input} from '@lib/UI/input';
import {PasswordInput} from '@lib/UI/password-input';

export function LoginForm() {
  return (
    <form className="flex flex-col gap-6">
      <Input label="Email" />
      <PasswordInput label="Password" id="login-password" />
      <Button height="high">Login</Button>
    </form>
  );
}
