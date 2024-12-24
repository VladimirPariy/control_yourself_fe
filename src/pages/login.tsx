import {RoutePath} from '@/app/router/constant';
import {LoginForm} from '@features/auth/login/login-form';
import {LoginOAuth} from '@features/auth/login/login-oauth';
import {AuthLayout} from '@lib/components/layouts/auth-layout';
import {AuthHeader, AuthLink} from '@lib/components/UI/auth-link';

export function LoginPage() {
  return (
    <AuthLayout>
      <AuthHeader text="Sign in" />
      <LoginOAuth />
      <LoginForm />
      <AuthLink label="Don't have an account?" href={RoutePath.SIGNUP} linkText="Sign up" />
    </AuthLayout>
  );
}
