import React from 'react';
import Title from '../components/Title';
import HeroImg from "../assets/hero-img.jpg";
import HomeThumbnail from '../components/HomeThumbnail';
import SmallMemberInfo from '../components/SmallMemberInfo';

const About = () => {
  return (
    <>
        <Title title="Historia de la banda"></Title>

        <div className='text-black p-10 mx-48 bg-gray-300'>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum tempora 
        delectus tempore esse, debitis animi enim magni recusandae, modi 
        repudiandae iste aliquid quisquam veritatis corporis distinctio. 
        Pariatur, veritatis. Ducimus ut veritatis dolores ad assumenda vel 
        corporis consectetur, adipisci, optio ratione dignissimos eligendi 
        obcaecati saepe exercitationem dolorem deleniti, quisquam eum iure 
        quibusdam neque cumque magni placeat unde nihil. Ratione sed, ipsam 
        voluptate molestiae sit quis magnam voluptates maiores mollitia placeat 
        consectetur? Sapiente nesciunt iure officia porro aut, doloremque 
        aliquam magni deserunt beatae velit cupiditate corporis tempore, 
        suscipit sint eos blanditiis tenetur recusandae! Delectus amet 
        tenetur at exercitationem ex, impedit assumenda deleniti earum mollitia 
        quaerat inventore alias possimus rerum vero error adipisci cum, officiis 
        commodi totam nostrum beatae. Iusto accusamus tenetur optio natus 
        doloremque porro nesciunt! Sapiente officiis rem reprehenderit quos 
        voluptates alias soluta delectus sunt tempore dolor. Autem aut quaerat 
        possimus nemo fugiat hic doloribus, consequuntur animi repudiandae quae 
        dolore optio dolor esse debitis dolores impedit assumenda vero corporis 
        unde reprehenderit praesentium eveniet quod. Delectus, ipsam magnam amet 
        facere quod saepe atque sequi recusandae provident nihil, voluptatibus 
        dolore illo magni molestias excepturi corrupti error iste dignissimos 
        iusto quidem! At officiis tempore tenetur illo! Blanditiis natus magnam 
        earum error quas beatae consequuntur.
        </div>

        <Title title="Conoce a los integrantes"></Title>

        <SmallMemberInfo name='Diego' photoSrc={HeroImg} position="right" color='primary'>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum tempora
        delectus tempore esse, debitis animi enim magni recusandae, modi
        repudiandae iste aliquid quisquam veritatis corporis distinctio.
        Pariatur, veritatis. Ducimus ut veritatis dolores ad assumenda vel
        corporis consectetur, adipisci, optio ratione dignissimos eligendi
        obcaecati saepe exercitationem dolorem deleniti, quisquam eum iure
        quibusdam neque cumque magni placeat unde nihil. Ratione sed, ipsam
        voluptate molestiae sit quis magnam voluptates maiores mollitia placeat
        consectetur? Sapiente nesciunt iure officia porro aut, doloremque
        aliquam magni deserunt beatae velit cupiditate corporis tempore,
        </SmallMemberInfo>

        <SmallMemberInfo name='David' photoSrc={HeroImg} position="left" color='secondary'>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum tempora
        delectus tempore esse, debitis animi enim magni recusandae, modi
        repudiandae iste aliquid quisquam veritatis corporis distinctio.
        Pariatur, veritatis. Ducimus ut veritatis dolores ad assumenda vel
        corporis consectetur, adipisci, optio ratione dignissimos eligendi
        obcaecati saepe exercitationem dolorem deleniti, quisquam eum iure
        quibusdam neque cumque magni placeat unde nihil. Ratione sed, ipsam
        voluptate molestiae sit quis magnam voluptates maiores mollitia placeat
        consectetur? Sapiente nesciunt iure officia porro aut, doloremque
        aliquam magni deserunt beatae velit cupiditate corporis tempore,
        </SmallMemberInfo>

        <SmallMemberInfo name='Julio' photoSrc={HeroImg} position="right" color='primary'>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum tempora
        delectus tempore esse, debitis animi enim magni recusandae, modi
        repudiandae iste aliquid quisquam veritatis corporis distinctio.
        Pariatur, veritatis. Ducimus ut veritatis dolores ad assumenda vel
        corporis consectetur, adipisci, optio ratione dignissimos eligendi
        obcaecati saepe exercitationem dolorem deleniti, quisquam eum iure
        quibusdam neque cumque magni placeat unde nihil. Ratione sed, ipsam
        voluptate molestiae sit quis magnam voluptates maiores mollitia placeat
        consectetur? Sapiente nesciunt iure officia porro aut, doloremque
        aliquam magni deserunt beatae velit cupiditate corporis tempore,
        </SmallMemberInfo>

        <SmallMemberInfo name='Dan' photoSrc={HeroImg} position="left" color='secondary'>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum tempora
        delectus tempore esse, debitis animi enim magni recusandae, modi
        repudiandae iste aliquid quisquam veritatis corporis distinctio.
        Pariatur, veritatis. Ducimus ut veritatis dolores ad assumenda vel
        corporis consectetur, adipisci, optio ratione dignissimos eligendi
        obcaecati saepe exercitationem dolorem deleniti, quisquam eum iure
        quibusdam neque cumque magni placeat unde nihil. Ratione sed, ipsam
        voluptate molestiae sit quis magnam voluptates maiores mollitia placeat
        consectetur? Sapiente nesciunt iure officia porro aut, doloremque
        aliquam magni deserunt beatae velit cupiditate corporis tempore,
        </SmallMemberInfo>

        <SmallMemberInfo name='Yair' photoSrc={HeroImg} position="right" color='primary'>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum tempora
        delectus tempore esse, debitis animi enim magni recusandae, modi
        repudiandae iste aliquid quisquam veritatis corporis distinctio.
        Pariatur, veritatis. Ducimus ut veritatis dolores ad assumenda vel
        corporis consectetur, adipisci, optio ratione dignissimos eligendi
        obcaecati saepe exercitationem dolorem deleniti, quisquam eum iure
        quibusdam neque cumque magni placeat unde nihil. Ratione sed, ipsam
        voluptate molestiae sit quis magnam voluptates maiores mollitia placeat
        consectetur? Sapiente nesciunt iure officia porro aut, doloremque
        aliquam magni deserunt beatae velit cupiditate corporis tempore,
        </SmallMemberInfo>

        <div className="pb-24">
        </div>
    </>  
  )
}

export default About
