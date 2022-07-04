import { ReactNode, useEffect, useState } from 'react';
import { MdArrowUpward } from 'react-icons/md';
import { useTheme } from 'styled-components';
import { Divider } from '../components/Elements/Divider';
import { Drawer } from '../components/Elements/Drawer';
import { DrawerButton } from '../components/Elements/DrawerButton';
import { Footer } from '../components/Elements/Footer';
import { FooterAttach } from '../components/Elements/Footer/FooterAttach';
import { FooterFirstSection } from '../components/Elements/Footer/FooterFirstSection';
import { FooterLink } from '../components/Elements/Footer/FooterLink';
import { FooterSecondSection } from '../components/Elements/Footer/FooterSecondSection';
import { FooterTitle } from '../components/Elements/Footer/FooterTitle';
import { Header } from '../components/Elements/Header';
import { HeaderLink } from '../components/Elements/Header/HeaderLink';
import { HeaderLinksContainer } from '../components/Elements/Header/HeaderLinksContainer';
import { HeaderLogoContainer } from '../components/Elements/Header/HeaderLogoContainer';
import { Logo } from '../components/Elements/Logo';
import { SocialIcons } from '../components/Elements/SocialIcons';
import { TopScrollButton } from '../components/Elements/TopScrollButton';
import { Text } from '../components/Typography/Text';
import { Container } from './styles';

import { WhatsappButton } from '../components/Elements/WhatsappButton';
import { NextProgressComponent } from '../components/Next/NextProgress';

interface LayoutProps {
    children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {

    const theme = useTheme()

    const [toggleDrawer, setToggleDrawer] = useState(false)
    const [headerAnimation, setHeaderAnimation] = useState(false)
    const [scrollTopAnimation, setScrollTopAnimation] = useState(false)

    function handleToggleDrawer() {
        setToggleDrawer(!toggleDrawer)
    }

    function scrollHeaderAnimation() {
        //@ts-ignore
        const topPos = window.scrollY
        if (topPos > 20) {
            setHeaderAnimation(true)
        } else {
            setHeaderAnimation(false)
        }
    }

    function scrollTopScrollButtonAnimation() {
        //@ts-ignore
        const topPos = window.scrollY
        if (topPos > 500) {
            setScrollTopAnimation(true)
        } else {
            setScrollTopAnimation(false)
        }
    }


    function callAnimations() {
        scrollTopScrollButtonAnimation()
        scrollHeaderAnimation()
    }

    useEffect(() => {
        window.addEventListener('scroll', callAnimations)
        return () => window.removeEventListener('scroll', callAnimations)
        //eslint-disable-next-line
    }, [])

    return (
        <Container id='top'>
            <NextProgressComponent
                color={theme.colors.white100}
            />
            <TopScrollButton
                ariaLabel='Voltar para o topo'
                className={scrollTopAnimation ? 'animatedTopScroll' : 'normalTopScroll'}
                icon={<MdArrowUpward />}
                elementReferenceId='top'
            />
            <WhatsappButton
                ariaLabel='Voltar para o topo'
                className={scrollTopAnimation ? 'animatedTopScroll' : 'normalTopScroll'}
                whatsappContact='31985187963'
            />
            <Header
                className={headerAnimation ? 'headerScrolling' : 'headerNotScrolling'}
            >
                {toggleDrawer &&
                    <Drawer
                        toggleDrawer={handleToggleDrawer}
                        direction='top'
                        style={{
                            backgroundColor: theme.colors.primary
                        }}
                    >
                        <HeaderLink
                            content='Home'
                            url='/'
                            onClick={handleToggleDrawer}
                        />
                        <HeaderLink
                            content='Tratamentos'
                            url='/Tratamentos'
                            onClick={handleToggleDrawer}
                        />
                        <HeaderLink
                            content='Contato'
                            url='/contato'
                            onClick={handleToggleDrawer}
                        />
                    </Drawer>
                }
                <DrawerButton
                    toggleDrawer={handleToggleDrawer}
                />
                <HeaderLogoContainer>
                    <Logo
                        imageUrl='/logo.svg'
                        size={headerAnimation ? 'small' : 'medium'}
                    />
                </HeaderLogoContainer>
                <HeaderLinksContainer>
                    <HeaderLink
                        content='Home'
                        url='/'
                    />
                    <HeaderLink
                        content='Tratamentos'
                        url='/Tratamentos'
                    />
                    <HeaderLink
                        content='Contato'
                        url='/contato'
                    />
                </HeaderLinksContainer>
            </Header>
            <main>{children}</main>
            <Footer
                style={{
                    backgroundColor: theme.colors.primary
                }}
            >
                <FooterFirstSection>
                    <FooterTitle
                        content='Sobre nós'
                    />
                    <FooterLink
                        content='Tratamentos'
                        url='/Tratamentos'
                    />
                    <FooterLink
                        content='Contato'
                        url='/contato'
                    />
                </FooterFirstSection>
                <FooterSecondSection>
                    <FooterTitle
                        content='Redes sociais'
                    />
                    <SocialIcons
                        linkedinUrl='https://www.linkedin.com/in/pablo-silva-76b521156'
                        githubUrl='https://github.com/pablolucio97'
                        instagramUrl='https://www.instagram.com/pablosilva.dev'
                        iconsSize='small'
                        iconsStyle={{ color: theme.colors.white500 }}
                    />
                </FooterSecondSection>
            </Footer>
            <FooterAttach
                style={{
                    backgroundColor: theme.colors.primary,
                }}
            >
                <Divider />
                <Text
                    content='PabloSilvaDev - © Copyright  2022'
                    style={{
                        color: theme.colors.white100,
                        fontSize: theme.sizes.small
                    }}

                />
            </FooterAttach>
        </Container>
    )
}