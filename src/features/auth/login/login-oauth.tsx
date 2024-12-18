import {AppleIcon} from '@assets/icons/apple';
import {GoogleIcon} from '@assets/icons/google';
import {Button} from '@lib/UI/button';

export function LoginOAuth() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <Button height="high">
        <GoogleIcon className="w-6 h-6 mr-2" />
        Google
      </Button>
      <Button height="high">
        <AppleIcon className="w-5 h-5 mr-2 fill-white" />
        Apple
      </Button>
      <p className="text-center cursor-default col-span-2">or</p>
    </div>
  );
}
