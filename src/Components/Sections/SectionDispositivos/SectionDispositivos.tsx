import SectionComponent from '../../shared/component/Section/SectionComponent'
import ImagemMobile from "/images/mobile-version.png"
import ImagemTablet from "/images/tablet.png"
import ImagemDesktop from "/images/desktop.png"

export interface SectionDispositivosProps {
    id: string
    title: string
}

export default function SectionDispositivos(props: SectionDispositivosProps) {
  return (
    <SectionComponent
    id={props.id}
    title={props.title}
    children={
        <div className="flex
        flex-col
        lg:flex-row
        gap-20
        justify-center
        items-center
        max-w-[75vw]
        w-full
        md:container
        mx-auto
        pt-10">
            <img src={ImagemMobile} alt="" className='h-[60vh]'  />
            <img src={ImagemTablet} alt="" className='h-[60vh]' />
            <img src={ImagemDesktop} alt="" className='md:h-[60vh]' />
        </div>
    }
    />
  )
}
