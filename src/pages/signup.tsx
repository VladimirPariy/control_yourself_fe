import {RoutePath} from '@/app/router/constant';
import {AuthLayout} from '@lib/components/layouts/auth-layout';
import {AuthHeader, AuthLink} from '@lib/components/UI/auth';
import {Button} from '@lib/components/UI/button';
import {Input} from '@lib/components/UI/input';
import {PasswordInput} from '@lib/components/UI/password-input';

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
