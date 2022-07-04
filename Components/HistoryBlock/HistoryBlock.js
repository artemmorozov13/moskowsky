import cn from "classnames";
import Image from "next/image";

import Container from "UI/Container/Container";

import s from "./historyBlock.module.scss";

const HistoryBlock = () => {
  return (
    <div className={s.main}>
      <div className={s.wrapper}>
        <Container className={cn(s.title, s.container)}>
          <span className={s.padding}>
            СПБ ГБ "КДЦ "МОСКОВСКИЙ" - Здесь царит творчество!
          </span>
        </Container>

        <Container className={cn(s.bio, s.container)}>
          <div>
            <p className={s.padding}>
              Дом культуры имени Ильича был построен по проекту архитектора
              Н.Ф.Демкова и открыт{" "}
              <span className={s.bold}>2 мая 1931 года.</span>
            </p>
            <p className={s.padding}>
              Его помнят несколько поколений жителей Московского района. Сюда
              приходили работники объединения «Электросилы», профкому которого
              принадлежал Дом культуры, а также жители всего Московского района.{" "}
            </p>
          </div>
          <img
            className={s.poster}
            src="/assets/images/portret.svg"
            width={300}
            height={240}
          />
        </Container>
      </div>

      <div className={s.borderBottom}>
        <div className={s.wrapper}>
          <Container className={cn(s.container, s.borderLeftRight)}>
            <p className={cn(s.padding, s.oswald)}>
              Проводились концерты, театральные постановки, демонстрировались
              художественные кинофильмы, шли занятия в детских и взрослых
              самодеятельных коллективах, которые много раз становились
              лауреатами Всесоюзных, Всероссийских и городских фестивалей и
              конкурсов.
            </p>
          </Container>
        </div>
      </div>

      <div className={cn(s.borderBottom, s.space)}>
        <div className={s.wrapper}>
          <Container className={cn(s.borderLeftRight, s.container)} />
        </div>
      </div>

      <div className={s.borderBottom}>
        <div className={s.wrapper}>
          <Container className={cn(s.container, s.borderLeftRight, s.house)}>
            <div className={s.descroption}>
              <p className={cn(s.padding, s.oswald)}>
                История Дома культуры имени Ильича неразрывно связана с историей
                Московского района.
              </p>
              <p className={s.padding}>
                Именно у нас были проведены первые ночные шоу, на которые
                перенимать опыт приезжали специалисты со всего города. Несколько
                лет подряд в наших помещениях располагался театральный институт
                «Школа русской драмы», возглавляемый Народным артистом СССР
                профессором И.О.Горбачевым.
              </p>
            </div>
            <div>
              <img
                src="/assets/images/projectkdc.jpg"
                className={s.thumbnail}
                width={605}
                height={304}
              />
            </div>
          </Container>
        </div>
      </div>

      <div className={s.borderBottom}>
        <div className={s.wrapper}>
          <Container className={cn(s.container, s.borderLeftRight, s.famous)}>
            <span className={cn(s.padding, s.oswald)}>Здесь бывали</span>
            <span className={s.padding}>
              знаменитый композитор И.О.Дунаевский, великий шахматист Анатолий
              Карпов, популярный артист Евгений Евстигнеев. Кинорежиссер Лузгин
              снимал эпизоды к фильму «Облако в штанах» в фойе Большого зала.
              Помнит наша сцена великие имена: Ольги Берггольц, Любови Орловой,
              Леонида Утёсова… В 1997 году Дом культуры имени Ильича был
              преобразован в Государственное учреждение "Культурно-досуговый
              центр "Московский".
            </span>
          </Container>
        </div>
      </div>

      <div className={s.wrapper}>
        <Container
          className={cn(s.container, s.borderLeftRight, s.famousPosters)}
        >
          <img className={s.famousPoster} src="/assets/images/famous1.jpg" />
          <img className={s.famousPoster} src="/assets/images/famous2.jpg" />
          <img className={s.famousPoster} src="/assets/images/famous3.jpg" />
          <img className={s.famousPoster} src="/assets/images/famous4.jpg" />
        </Container>
      </div>
    </div>
  );
};

export default HistoryBlock;