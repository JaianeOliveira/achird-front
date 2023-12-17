import { Dialog, DialogProps } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import Button from "../../UI/Button";
import { useForm, Controller } from "react-hook-form";
import { classNames } from "primereact/utils";

export type EditSlugModalProps = {
  title: string;
  currentSlug: string;
} & DialogProps;
export default function EditSlugModal({
  title,
  currentSlug,
  ...props
}: EditSlugModalProps) {
  const {
    formState: { errors },
    handleSubmit,
    register,
    reset,
  } = useForm<{ newSlug: string }>({});

  const header = <h2 className="pb-2 font-bold text-md ">{title}</h2>;
  const footer = (
    <div className="w-full flex items-center justify-end gap-2">
      <Button
        type="submit"
        customType="text-danger"
        onClick={onCancel}
        className="p-button-text"
      >
        Cancelar
      </Button>
      <Button onClick={handleSubmit(onSubmit)}>Salvar</Button>
    </div>
  );

  function onCancel() {
    reset();
    props.onHide();
  }
  function onSubmit({ newSlug }: { newSlug: string }) {
    console.log(newSlug);
    reset();
    props.onHide();
  }
  return (
    <Dialog
      resizable={false}
      draggable={false}
      closeOnEscape={true}
      className="bg-slate-100 dark:bg-slate-930 p-4 rounded-lg shadow-md w-[80vw] lg:w-[40vw] min-h-[30vh] max-h-[90vh]"
      header={header}
      footer={footer}
      {...props}
    >
      <p className="text-sm italic">
        Seu slug atual é <strong>{currentSlug}</strong>
      </p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-wrap mt-4 gap-1 items-center"
      >
        <label htmlFor="new-slug">{window.document.location.origin}/to/</label>
        <InputText
          {...register("newSlug", {
            required: true,
            validate: (value) => {
              return value !== currentSlug;
            },
          })}
          placeholder="Digite seu novo slug"
          className={classNames({
            "border-red-500": errors.newSlug,
            "bg-slate-900/10 dark:bg-slate-900/80 px-2 py-1 rounded-md outline-none focus-visible:outline-1 focus-visible:outline-slate-400 dark:focus-visible:outline-slate-800 text-sm w-3/4 md:w-44":
              true,
          })}
        />
        {errors.newSlug && (
          <small id="new-slug-help" className="p-error block text-red-500">
            Este slug não está disponível.
          </small>
        )}
      </form>
    </Dialog>
  );
}
