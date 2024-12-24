import {zodResolver} from '@hookform/resolvers/zod';
import {Button} from '@lib/components/UI/button';
import {Input} from '@lib/components/UI/input';
import {PasswordInput} from '@lib/components/UI/password-input';
import {useForm} from 'react-hook-form';
import {loginSchema} from './validation';
import {z} from 'zod';

const defaultFormData = {
  email: '',
  password: '',
};

type LoginForm = z.infer<typeof loginSchema>;

export function LoginForm() {
  const {
    handleSubmit,
    register,
    formState: {errors},
  } = useForm<LoginForm>({
    defaultValues: defaultFormData,
    mode: 'onSubmit',
    resolver: zodResolver(loginSchema),
  });

  function onSubmitLoginForm(data: LoginForm) {
    console.log(data);
  }

  return (
    <form className="flex flex-col gap-8" onSubmit={handleSubmit(onSubmitLoginForm)}>
      <Input label="Email" error={errors.email?.message} {...register('email')} />
      <PasswordInput label="Password" id="login-password" error={errors.password?.message} {...register('password')} />
      <Button height="high">Login</Button>
    </form>
  );
}
