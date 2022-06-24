import { CheckCircle, Lock } from "phosphor-react";
import { isPast, format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { Link, useParams } from "react-router-dom";
import classNames from "classnames";

interface LessonProps {
  title: string;
  slug: string;
  availableAt: Date;
  type: "live" | "class";
}

export function Lesson({ title, slug, availableAt, type }: LessonProps) {
  const { slug_url } = useParams<{ slug_url: string }>();
  const isLessonAvailable = isPast(availableAt);
  const availableDateFormatted = format(
    availableAt,
    "EEEE' • 'd' de 'MMMM' •' k'h'mm",
    { locale: ptBR }
  );
  const isActiveLesson = slug_url == slug;

  return (
    <Link
      to={`${isLessonAvailable ? "/event/lesson/" + `${slug}` : ""}
      `}
      className={`group ${isLessonAvailable ? "" : "cursor-not-allowed"}`}
    >
      <span className="text-gray-300 font-bold">{availableDateFormatted}</span>

      <div
        className={classNames(
          "rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500",
          {
            "bg-green-500": isActiveLesson && isLessonAvailable,
            "opacity-50": !isLessonAvailable,
          }
        )}
      >
        <header className="flex items-center justify-between">
          {isLessonAvailable ? (
            <span
              className={classNames(
                "text-sm text-blue-500 font-medium flex items-center gap-2 ",
                {
                  "text-white": isActiveLesson && isLessonAvailable,
                }
              )}
            >
              <CheckCircle size={20} />
              Conteúdo liberado
            </span>
          ) : (
            <span className="text-sm text-orange-500 font-medium flex items-center gap-2">
              <Lock size={20} />
              Em breve
            </span>
          )}

          <span
            className={classNames(
              "text-xs rounded px-2 py-[0.125rem] border border-green-500 font-bold",
              {
                "border-white": isActiveLesson && isLessonAvailable,
              }
            )}
          >
            {type == "live" ? "AO VIVO" : "AULA PRÁTICA"}
          </span>
        </header>

        <strong
          className={classNames("text-gray-200 mt-5 block", {
            "text-white": isActiveLesson && isLessonAvailable,
          })}
        >
          {title}
        </strong>
      </div>
    </Link>
  );
}
