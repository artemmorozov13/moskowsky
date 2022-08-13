import { useRouter } from "next/router";
import cn from "classnames";
import Header from "Components/Header/Header";
import Footer from "Components/Footer/Footer";

import ButtonArrow from "UI/ButtonArrow/ButtonArrow";
import Button from "UI/Button/Button";

import { useEffect, useState } from "react";
import apiService from "services/apiService";
import Skeleton from "react-loading-skeleton";
import { Skeleton as ImageSkeleton } from "@mui/material";

import "react-loading-skeleton/dist/skeleton.css";
import s from "styles/pages/SingleCollective.module.scss";
import { routes } from "shared/enums/pages";
import ModalWindow from "UI/Modal/ModalWindow";
import JoinCollectiveWindow from "Components/JoinCollectiveWindow/JoinCollectiveWindow";
import Wrapper from "UI/Wrapper/Wrapper";
import { useSelector } from "react-redux";

const htmlDecode = (content) => {
  const doc = new DOMParser().parseFromString(content, "text/html");
  return doc.documentElement.textContent;
};

const SingleColectivePage = () => {
  const {
    isReady,
    query: { id },
  } = useRouter();

  const { visuallyImpairedVersion: v } = useSelector((state) => state.ability);
  const [loading, setLoading] = useState(true);
  const [collective, setCollective] = useState(null);
  const [isOpne, setOpen] = useState(false);

  useEffect(() => {
    if (isReady) {
      apiService
        .getCollectiveByID(id)
        .then((res) => setCollective(res))
        .finally(() => setLoading(false));
    }
  }, [isReady]);

  return (
    <>
      <Header />

      <Wrapper space borderBottom />

      <div className={s.main}>
        <Wrapper>
          <div className={s.header}>
            <ButtonArrow
              direction="back"
              color="red"
              href={routes.collectives}
              hasLink
            />
            <span>Все коллективы</span>
          </div>
          <div className={s.content}>
            <div className={cn(s.gallery, loading ? s.loading : null)}>
              {loading ? (
                <ImageSkeleton className={s.imageSkeleton} />
              ) : (
                <div>
                  <img className={s.thumbnail} src={collective.thumbnail} />
                </div>
              )}
              {loading
                ? [...Array(4)].map((el, index) => (
                    <Skeleton
                      className={s.imageSkeleton}
                      key={`snapSkeleton_${index}`}
                    />
                  ))
                : collective.snaps.map((image, index) => (
                    <div>
                      <img
                        key={`imageKey_${index}`}
                        className={s.thumbnail}
                        src={image}
                      />
                    </div>
                  ))}
            </div>
            <div className={s.info}>
              <div className={cn(s.title)}>
                {loading ? (
                  <Skeleton />
                ) : (
                  <h2>{htmlDecode(collective.title)}</h2>
                )}
              </div>
              <div className={s.table}>
                <div className={s.column}>
                  <span className={cn(s.secondary, v ? s.ability : null)}>
                    Направление:
                  </span>
                  {loading ? (
                    <Skeleton />
                  ) : (
                    <span className={cn(s.bold, v ? s.ability : null)}>
                      {collective.trend}
                    </span>
                  )}
                </div>
                <div className={s.column}>
                  <span className={cn(s.secondary, v ? s.ability : null)}>
                    Стоимость:
                  </span>
                  {loading ? (
                    <Skeleton />
                  ) : (
                    <span className={cn(s.bold, v ? s.ability : null)}>
                      {collective.price == 0
                        ? "Бесплатно"
                        : `${collective.price} руб.`}
                    </span>
                  )}
                </div>
                <div className={s.column}>
                  <span className={cn(s.secondary, v ? s.ability : null)}>
                    Групповые занятия:
                  </span>
                  {loading ? (
                    <Skeleton />
                  ) : (
                    <span className={cn(s.bold, v ? s.ability : null)}>
                      {collective.timetable}
                    </span>
                  )}
                </div>
                <div className={s.column}>
                  <span className={cn(s.secondary, v ? s.ability : null)}>
                    Контакты:
                  </span>
                  {loading ? (
                    <Skeleton />
                  ) : (
                    <span className={cn(s.bold, v ? s.ability : null)}>
                      {collective.phone}
                    </span>
                  )}
                </div>
                <div className={s.column}>
                  <span className={cn(s.secondary, v ? s.ability : null)}>
                    Категория:
                  </span>
                  {loading ? (
                    <Skeleton />
                  ) : (
                    <span className={cn(s.bold, v ? s.ability : null)}>
                      {collective.limits}
                    </span>
                  )}
                </div>
                <div className={s.button}>
                  <Button onClick={() => setOpen(true)}>Записаться</Button>
                </div>
                <div className={s.column}>
                  <span className={cn(s.secondary, v ? s.ability : null)}>
                    Адрес:
                  </span>
                  {loading ? (
                    <Skeleton />
                  ) : (
                    <span className={cn(s.bold, v ? s.ability : null)}>
                      {collective.location}
                    </span>
                  )}
                </div>
                <div className={cn(s.location)}>
                  {loading ? (
                    <Skeleton />
                  ) : (
                    <span className={v ? s.ability : null}>
                      {collective.classroom}
                    </span>
                  )}
                  <span className={s.icon}>
                    <img src="/assets/icons/location.svg" />
                  </span>
                </div>
              </div>
              <div className={cn(s.description, s.borderBottom)}>
                <div className={cn(s.descTitle, s.border)}>
                  <span className={s.bold}>Описание</span>
                  {loading ? (
                    <Skeleton />
                  ) : (
                    <span className={cn(s.secondary, v ? s.ability : null)}>
                      {htmlDecode(collective.title)}
                    </span>
                  )}
                </div>
                <div className={cn(s.text, s.border)}>
                  {loading ? (
                    <Skeleton count={10} />
                  ) : (
                    <p className={cn(s.padding, s.about, v ? s.ability : null)}>
                      {htmlDecode(collective.content)}
                    </p>
                  )}
                </div>
              </div>
              <div className={s.timetable}>
                <div
                  className={cn(s.descTitle, s.borderBottom, s.borderLeftRight)}
                >
                  <span className={s.bold}>Программа</span>
                </div>
                <div>
                  <ul className={s.list}>
                    {loading ? (
                      <>
                        <Skeleton />
                        <Skeleton />
                        <Skeleton />
                      </>
                    ) : (
                      collective.program.map((item, index) => (
                        <li
                          key={`listItem_${index}`}
                          className={cn(s.item, v ? s.ability : null)}
                        >
                          <img src="/assets/icons/listmarker.svg" />
                          {item}
                        </li>
                      ))
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Wrapper>
      </div>

      <ModalWindow
        title="Запись в коллектив"
        isOpen={isOpne}
        onClose={() => setOpen(false)}
      >
        <JoinCollectiveWindow collective={collective} />
      </ModalWindow>

      <Footer />
    </>
  );
};

export default SingleColectivePage;
