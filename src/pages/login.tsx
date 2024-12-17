import {AuthLayout} from '@lib/layouts/auth-layout';
import {Button} from '@lib/UI/button';

export function LoginPage() {
  return (
    <AuthLayout>
      <Button height="high" width="full">
        Login
      </Button>
    </AuthLayout>
  );
}
