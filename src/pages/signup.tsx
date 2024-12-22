import {RoutePath} from '@/app/router/constant';
import {AuthLayout} from '@lib/layouts/auth-layout';
import {AuthHeader, AuthLink} from '@lib/UI/auth';
import {Button} from '@lib/UI/button';
import {Input} from '@lib/UI/input';
import {PasswordInput} from '@lib/UI/password-input';

export function SignUpPage() {
  return (
    <AuthLayout>
      <AuthHeader text="Create an account" />
      <form className="flex flex-col gap-6">
        <Input label="Email" />
        <PasswordInput label="Password" id={'signup-password'} />
        <PasswordInput label="Confirm password" id={'signup-confirm-password'} />

        <Button height="high">Sign up</Button>
      </form>
      <AuthLink label="Already have an account?" href={RoutePath.LOGIN} linkText="Sign in" />
    </AuthLayout>
  );
}
