import SquareImg from "../assets/square-photo.jpg";

import DiegoImg from "../assets/member-diego.jpeg";
import DavidImg from "../assets/member-david.png";
import JulioImg from "../assets/member-julio.jpeg";
import DanImg from "../assets/member-dan.jpg";
import YairImg from "../assets/member-yair.jpeg";

import PageTitle from "../components/PageTitle";
import SmallMemberInfo from "../components/SmallMemberInfo";

const About = () => {
  return (
    <div className='pt-36'>
      <PageTitle title='Sobre Nosotros' idName="historia"/>
      <div className='flex lg:flex-row flex-col container max-w-5xl mx-auto'>
        <div className='text-white lg:w-full grid content-center mx-5'>
          <div className='m-4'>
            {" "}
            {/*Historia*/}
            <h3 className='my-2 text-3xl font-title font-medium'>Historia</h3>
            <div className=''>
              El encuentro de los integrantes de Demodé involucra familiares,
              vecinos, amigos del colegio y hasta un contacto por Facebook pero
              fue la música la que terminó uniendo a todos. El inicio del
              proyecto (2020) coincidió con la restricción social debido al
              COVID 19, por lo que se empezó realizando grabaciones desde casa
              para después terminar ensamblando denominando así al grupo
              provisionalmente como "Homemade". Tiempo después la banda ya se
              pudo ir reuniendo para componer y ensayar a mejor manera. Además
              de cambiar su nombre a Demodé.
              <br />
              A pesar de que las influencias musicales son distintas siempre se
              converge en algo que nos gusta. Es por eso que cada todos hacen
              sus aportes en cuanto a las canciones y muchas veces nos dejamos
              fluir con improvisaciones.
              <br />
              En 2021, se lanzaron dos 2 canciones demo, el primero de ellos,
              "Pasa el tiempo", abarca como tema a la autocrítica de cualquier
              persona con falta de autoestima, el cual está harto de seguir con
              la falta de amar y quiere mejorar. El segundo demo, "Via crisis",
              describe los problemas comunes de un adolescente o joven adulto
              como el estrés por los estudios y el trabajo o por las relaciones
              interpersonales que van debilitando a uno.
              <br />
              El año 2022, Demodé empieza el proyecto de su EP Debut, el cual
              trae consigo una gran experiencia, sensaciones y muy buena música
              para todo el público.
            </div>
          </div>
          <div className='m-4'>
            {" "}
            {/*Visión*/}
            <h3 className='my-2 text-3xl font-title font-medium'>Visión</h3>
            <div className=''>
              La banda Demodé busca ser un referente en cuanto a música a nivel
              nacional e internacional llegando a los oídos y corazones de su
              público mientras a su vez realizan el arte del cuál más gustan. A
              pesar de tomar como punto de partida al rock, la banda busca no
              encasillarse en un solo género o estilo e ir variando según los
              propios gustos de los integrantes los cuales también difieren
              generando así un amplio espectro de recursos con los cuales poder
              experimentar y transmitir.
            </div>
          </div>
        </div>
        <div className='lg:w-5/6 lg:mx-auto lg:p-5 grid content-center'>
          <img
            src={SquareImg}
            alt='Historia'
            className='w-2/3 lg:w-full mx-auto mt-10 lg:mt-0'
          />
        </div>
      </div>

      <PageTitle title='Conócenos' className='mt-10' idName="miembros"/>

      <SmallMemberInfo
        name='Diego'
        photoSrc={DiegoImg}
        position='left'
        color='primary'
      >
        Diego Castañeda Calderón tío de David Chávez, comenzó en la música desde
        muy pequeño con la zampoña, flauta dulce y por etapas tocó la tarola en
        la banda colegial, aún cursando la secundaria se animó por la guitarra
        acústica criolla llevándolo a estudiar un curso formativo en el MALI, a
        mediados del 2011 tomó más interés en la batería acústica al visitar
        varias salas de estudio junto a sus amigos de barrio, es cuando decide
        trabajar para comprar su primera batería acústica en el 2012, con el
        tiempo optó por desenvolverse en la percusión por completo, con el paso
        de los años, cursó distintas clases particulares de batería, tuvo
        distintas presentaciones en bares, pubs y lugares públicos con distintas
        bandas indie y rock alternativo, pero, no llegaba a tomarlo en serio del
        todo.
        <br />
        Ya habiendo dejado de lado la música por un periodo de casi 2 años; el
        2020 David Chávez le propone hacer un tributo a Queen, al día de hoy ya
        siendo egresado en Derecho, es miembro de Demodé como baterista.
      </SmallMemberInfo>

      <SmallMemberInfo
        name='David'
        photoSrc={DavidImg}
        position='right'
        color='primary'
      >
        David Chavez Palacios empezó desde muy pequeño en el arte del canto.
        Pasó por el museo de Arte cuando tenía 7 años. En 2009, a la edad de 8
        años, participó en un concurso de canto en el Satchmo. En 2010, ingresó
        a una Escuela de Talentos, donde fue becado, participando como miembro
        del coro, ahí mismo es como pasaría el mayor tiempo de su infancia y
        adolescencia presentándose tanto en shows como en televisión, de esta
        manera se desarrolló como artista.
        <br />
        En 2016, participó en La Voz Kids, donde quedó como semifinalista del
        programa. En 2020, le surge la idea de formar un proyecto de tributo a
        la banda Queen, contactándose con algunos músicos; sin embargo, al final
        descubrió que la versatilidad de la banda podía ser mejor aprovechada
        mediante composiciones y covers.
      </SmallMemberInfo>

      <SmallMemberInfo
        name='Julio'
        photoSrc={JulioImg}
        position='left'
        color='primary'
      >
        En 2012, Julio Chauca conoció a Daniel Cifuentes en la escuela con quien
        estudiaría hasta el 2016. Pero ya había comenzado a tocar la guitarra
        hace un par de años atrás. En 2014, junto a su hermano y sus amigos,
        comenzó una banda logrando tocar una vez en vivo pero luego perdieron
        contacto.
        <br />
        En 2017 a mitad de año, junto a dos amigos de colegio comenzarían a
        reunirse para tocar aunque no seriamente. No fue hasta 2018 donde junto
        a un amigo cercano decidieron crear un grupo más serio pero en un género
        más underground.
        <br />A finales del 2020, Daniel volvió a tener contacto con Julio ya
        que la banda estaba en busca de un segundo guitarrista, fue así que
        logró entrar y llegar a conectar bien con la banda.
      </SmallMemberInfo>

      <SmallMemberInfo
        name='Dan'
        photoSrc={DanImg}
        position='right'
        color='primary'
      >
        En 2012, Daniel Cifuentes Michuy conoció a Julio Chauca en la escuela
        con quien estudiaría hasta el 2016. Fue en ese año donde Daniel
        empezaría a tocar la guitarra junto a 3 amigas vocalistas formando una
        agrupación sencilla la cuál se disolvió ese mismo año. Sin embargo,
        mantuvo contacto musical con una de ellas.
        <br />
        El 2017, a los pocos días de terminar la escuela, tocó el bajo por
        primera vez en una sala de ensayo donde se enamoró del instrumento. En
        el 2018 Daniel se unió como guitarrista al coro de una capilla y en 2019
        intentó formar una banda tributo a Queen junto con su amiga vocalista y
        dos amigos de la universidad. Él se desempeñaría como bajista por lo que
        compró su primer bajo pero la banda tampoco prosperó.
        <br />
        Al año siguiente, 2020, él saldría del coro de la capilla y volvería a
        intentar el tributo a Queen tras ver un anuncio en internet. Luego de
        postular mediante un video entraría a la banda y conocería a David
        Chavez.
      </SmallMemberInfo>

      <SmallMemberInfo
        name='Yair'
        photoSrc={YairImg}
        position='left'
        color='primary'
      >
        Yair Chunga empezó tocando el clarinete en el año 2017 por una
        recomendación de una amiga muy cercana con la que tocaba, luego lo fue
        dejando de lado el instrumento por no agarrarle el gusto.
        <br />
        En el año 2019 empezó a tocar la guitarra, y a finales de ese año, tuvo
        su primera guitarra eléctrica la cual la hizo enamorarse del
        instrumento. Formo una banda en la que no le fue muy bien, y
        concretamente en el año 2020 su amigo y vecino David Chávez, lo llamó
        para que sea parte de la banda Demodé hasta el día de hoy.
      </SmallMemberInfo>

      <div className='pb-24'></div>
    </div>
  );
};

export default About;
