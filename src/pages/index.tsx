import type { NextPage } from 'next'
import Head from 'next/head'
import { NextImage } from '../components/Next/NextImage'
import { Title } from '../components/Typography/Title'
import { Text } from '../components/Typography/Text'
import { BannerSection, BannerSectionContainer, Container, IntroductionSection, IntroductionSectionContainer, IntroductionSectionContentContainer, IntroductionSectionImageContainer } from '../styles'

const Home: NextPage = () => {

  return (
    <Container style={{ marginBottom: 120 }}>
      <Head>
        <title> MyPage | Home</title>
        {/* @ts-ignore */}
        <meta charset="UTF-8" />
        <meta name="description" content="Landing pages de alta conversão e sites institucionais para o seu negócio." />
        <meta name="keywords" content="pablosilvadev pablo silva psd landing pages" />
        <meta name='author' content='Pablo Silva' />
        <meta name="theme-color" content="#000000" />
      </Head>
      <BannerSection id='home'>
        <BannerSectionContainer />
      </BannerSection>
      <IntroductionSection>
        <IntroductionSectionContainer>
          <IntroductionSectionImageContainer>
            <NextImage
              height={576}
              width={384
              }
              imgUrl='/woman.png'
            />
          </IntroductionSectionImageContainer>
        
          <IntroductionSectionContentContainer>
          <Title 
          content='Quem sou eu'
          />
          <Text
          content='Meu nome é Simone Alvarenga sou formada em psicologia pela Universidade de São Paulo e venho trabalhando como psicóloga há mais de 17 anos.'
           />
          <Text
          content='Com o propósito de ajudar o máximo de pessoas possíveis, me especializei no estudo da mente humana. Hoje atuo com diversos tratamento que auxiliam na recuperação de experiências traumáticas e psicologicamente prejudiciais.'
           />
          </IntroductionSectionContentContainer>
        </IntroductionSectionContainer>
      </IntroductionSection>
    </Container>
  )
}

export default Home
