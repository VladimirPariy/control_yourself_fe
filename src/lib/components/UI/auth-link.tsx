import {RoutePath} from '@/app/router/constant';
import {Link} from 'react-router-dom';

export function AuthHeader(props: {text: string}) {
  return <h1 className="text-3xl font-semibold text-center">{props.text}</h1>;
}

type AuthLinkProps = {
  label: string;
  href: RoutePath;
  linkText: string;
};

export function AuthLink(props: AuthLinkProps) {
  return (
    <div className="flex justify-center items-center gap-2 ">
      <span className="cursor-default">{props.label}</span>
      <Link to={props.href} className="hover:text-purple-700 transition-all duration-300">
        {props.linkText}
      </Link>
    </div>
  );
}
