'use client';

import { useClipboard } from '@/hooks/useClipboard';
import {
  changePageIsPublic,
  changeTheme,
  getAuthenticatedUser,
  updatePageData,
} from '@/services/api/userService';
import { AVAILABLE_THEMES } from '@/utils/CONSTANTS';
import Cookies from 'js-cookie';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FiCopy, FiHelpCircle } from 'react-icons/fi';
import { toast } from 'sonner';
export default function SettingsPage() {
  const router = useRouter();
  const [userData, setUserData] = useState<any>();
  const [state, setState] = useState<'idle' | 'loading' | 'error' | 'content'>(
    'idle'
  );

  const { copy } = useClipboard();

  const getUserData = async () => {
    setState('loading');
    try {
      const response = await getAuthenticatedUser(
        Cookies.get('ACHIRD_TOKEN') as string
      );
      setUserData(response.data);
      setState('content');
      Cookies.set('ACHIRD_SLUG', response.data.slug);
    } catch (error) {
      setState('error');
      router.replace('/auth/login');
      toast.error('Algo deu errado');
      Cookies.remove('ACHIRD_TOKEN');
      Cookies.remove('ACHIRD_SLUG');
    }
  };

  const handleChangeTheme = async (e: any) => {
    const response = await changeTheme(
      Cookies.get('ACHIRD_TOKEN') as string,
      e.target.value
    );
    if (response.status === 200) {
      toast.success('Tema alterado com sucesso');
      getUserData();
    }
  };

  const handleChangePageIsPublic = async (e: any) => {
    const response = await changePageIsPublic(
      Cookies.get('ACHIRD_TOKEN') as string,
      e.target.checked
    );
    if (response.status === 200) {
      toast.success('Privacidade da página alterada com sucesso');
      getUserData();
    }
  };

  const handleUpdatePageData = async () => {
    const response = await updatePageData(
      Cookies.get('ACHIRD_TOKEN') as string
    );
    if (response.status === 200) {
      toast.success('Os dados da sua página estão atualizados');
      getUserData();
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  useEffect(() => {
    document.body.setAttribute(
      'data-theme',
      userData?.page_config.theme || 'achird-dark'
    );
  }, [userData]);

  if (state === 'loading') {
    return (
      <div className="flex flex-col px-8 md:px-16 lg:px-32 py-8">
        <h2 className="text-xl font-bold mb-4">Personalize sua página</h2>
        <section className="flex items-center gap-2 mb-8">
          <div className="w-56 h-4 skeleton"></div>
          <button className="btn btn-circle btn-sm skeleton"></button>
        </section>
        <section className="mb-8">
          <div className="p-4 flex flex-col items-center md:items-start gap-4 md:flex-row bg-base-200 shadow-inner rounded-xl w-full">
            <div className="h-32 w-32 skeleton rounded-full"></div>
            <div className="flex flex-col items-center md:items-start mt-4">
              <h2 className="font-bold text-xl w-32 h-6 skeleton mb-3"></h2>
              <p className="w-56 h-4 skeleton"></p>

              <div className="divider invisible md:visible divider-start m-0 w-12"></div>
              <div className="flex gap-2 flex-wrap items-center justify-center md:justify-start md:items-start">
                <p className="skeleton h-4 w-24 underline underline-offset-2 text-sm font-medium"></p>
                <p className="skeleton h-4 w-48 underline underline-offset-2 text-sm font-medium"></p>
              </div>
              <div className="divider invisible md:visible divider-start m-0 w-12"></div>
              <div className="flex flex-col items-center md:items-start">
                <h3 className="h-3 w-32 skeleton mb-2"></h3>
                <ul className="flex gap-2 flex-wrap items-center justify-center md:items-start md:justify-start">
                  <div className="w-14 h-3 skeleton"></div>
                  <div className="w-14 h-3 skeleton"></div>
                  <div className="w-14 h-3 skeleton"></div>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="mb-8">
          <h2 className="text-lg font-bold mb-2">
            Projeto sendo exibidos{' '}
            <div className="tooltip tooltip-info" data-tip="Como configurar">
              <button
                className="btn btn-ghost btn-circle btn-sm"
                onClick={() => {
                  // @ts-ignore
                  document.getElementById('my_modal_1')?.showModal();
                }}
              >
                <FiHelpCircle />
              </button>
            </div>
            <dialog id="my_modal_1" className="modal">
              <div className="modal-box">
                <h3 className="font-bold text-lg">Hello!</h3>
                <p className="py-4">
                  Press ESC key or click the button below to close
                </p>
                <div className="modal-action">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn">Close</button>
                  </form>
                </div>
              </div>

              <form method="dialog" className="modal-backdrop">
                <button>close</button>
              </form>
            </dialog>
          </h2>
          <ul className="flex gap-2 flex-wrap">
            <li className="badge badge-neutral skeleton w-14"></li>
            <li className="badge badge-neutral skeleton w-12"></li>
            <li className="badge badge-neutral skeleton w-16"></li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-lg font-bold mb-2">Experiências profissionais</h2>
          <p className="text-sm italic opacity-75">Em breve</p>
        </section>
        <section className="mb-8">
          <h2 className="text-lg font-bold mb-2">Configurações</h2>
          <form className="flex gap-2 items-center">
            <select className="select select-bordered w-full max-w-xs skeleton"></select>
          </form>

          <div className="form-control w-64 mt-2">
            <label className="cursor-pointer label">
              <span className="label-text">Página visível ao público</span>
              <div className="w-12 h-6 skeleton"></div>
            </label>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="flex flex-col px-8 md:px-16 lg:px-32 py-8">
      <h2 className="text-xl font-bold mb-4">Personalize sua página</h2>
      <section className="flex items-center gap-2 mb-8">
        <p className="text-sm">
          Sua url é:{' '}
          <a
            className="link link-hover link-primary italic"
            href={`${window?.location.origin}/to/${userData?.page_config?.slug}`}
            target="_blanks"
          >
            {window?.location.origin}/to/{userData?.page_config?.slug}
          </a>
        </p>
        <div className="tooltip" data-tip="Copiar link">
          <button
            className="btn btn-circle btn-sm"
            onClick={() => {
              copy(
                `${window?.location.origin}/to/${userData?.page_config?.slug}`
              );
              toast.success('Link copiado', { duration: 1000 });
            }}
          >
            <FiCopy />
          </button>
        </div>
      </section>
      <section className="mb-8">
        <div className="p-4 flex flex-col items-center md:items-start gap-4 md:flex-row bg-base-200 shadow-inner rounded-xl w-full">
          <Image
            src={userData?.avatar_url}
            alt={userData?.name}
            className="rounded-full h-32 shadow-xl"
            height={128}
            width={128}
          />
          <div className="flex flex-col items-center md:items-start mt-4">
            <h2 className="font-bold text-xl">{userData?.name}</h2>
            <p className="text-sm">{userData?.bio}</p>

            <div className="divider invisible md:visible divider-start m-0 w-12"></div>
            <div className="flex gap-2 flex-wrap items-center justify-center md:justify-start md:items-start">
              <p className="underline underline-offset-2 text-sm font-medium">
                {userData?.github_user}
              </p>
              <p className="underline underline-offset-2 text-sm font-medium">
                {userData?.email}
              </p>
            </div>
            <div className="divider invisible md:visible divider-start m-0 w-12"></div>
            <div className="flex flex-col items-center md:items-start">
              <h3 className="text-sm font-semibold">Redes sociais</h3>
              <ul className="flex gap-2 flex-wrap items-center justify-center md:items-start md:justify-start">
                {userData?.social_accounts.map((account: any) => (
                  <li key={account.id}>
                    <a
                      href={account.url}
                      target="_blank"
                      className="font-medium underline underline-offset-2 text-sm"
                    >
                      {account.provider}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="mb-8">
        <h2 className="text-lg font-bold mb-2">
          Projeto sendo exibidos{' '}
          <div className="tooltip tooltip-info" data-tip="Como configurar">
            <button
              className="btn btn-ghost btn-circle btn-sm"
              onClick={() => {
                // @ts-ignore
                document.getElementById('my_modal_1')?.showModal();
              }}
            >
              <FiHelpCircle />
            </button>
          </div>
          <dialog id="my_modal_1" className="modal">
            <div className="modal-box">
              <h3 className="font-bold text-lg">
                Como configurar os projetos para serem exibidos na sua página do
                achird
              </h3>
              <p className="py-4 text-sm font-normal">
                Acesse seu github, e, na página do seu projeto, adicione o
                tópico &quot;view-on-achird&quot;. Depois, volte para o Achird e
                faça login novamente e seus dados atualizados serão exibidos.
              </p>
              <div className="modal-action">
                <form method="dialog">
                  <button className="btn">Close</button>
                </form>
              </div>
            </div>

            <form method="dialog" className="modal-backdrop">
              <button>Entendi</button>
            </form>
          </dialog>
        </h2>
        <ul className="flex gap-2 flex-wrap">
          {userData?.repositories.map((repository: any) => (
            <li key={repository.id} className="badge badge-neutral">
              {repository.name}
            </li>
          ))}
        </ul>
      </section>
      <section className="mb-8">
        <h2 className="text-lg font-bold mb-2">Experiências profissionais</h2>
        <p className="text-sm italic opacity-75">Em breve</p>
      </section>
      <section className="mb-8">
        <h2 className="text-lg font-bold mb-2">Configurações de exibição</h2>
        <form className="flex gap-2 items-center">
          <div className="label">
            <span className="label-text">Tema da página</span>
          </div>
          <select
            className="select select-bordered w-full max-w-xs"
            onChange={handleChangeTheme}
          >
            <option disabled selected>
              Escolha o tema da sua página
            </option>
            {AVAILABLE_THEMES.map((theme) => (
              <option
                key={theme}
                value={theme}
                selected={theme === userData?.page_config.theme}
              >
                {theme}
              </option>
            ))}
          </select>
        </form>

        <div className="form-control w-64 mt-2">
          <label className="cursor-pointer label">
            <span className="label-text">Página visível ao público</span>
            <input
              type="checkbox"
              className="toggle toggle-primary"
              checked={userData?.page_config.page_is_public}
              onChange={handleChangePageIsPublic}
            />
          </label>
        </div>
      </section>
    </div>
  );
}
