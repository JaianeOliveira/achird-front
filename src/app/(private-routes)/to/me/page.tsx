import Cookies from 'js-cookie';
import { redirect } from 'next/navigation';
export default function Page() {
  redirect(`/to/${Cookies.get('ACHIRD_SLUG')}`);
}
