import Head from 'next/head'
import Image from 'next/image'
import swr from '../lib/swr';
import Tippy from '@tippyjs/react';

const items = [
  { icon: 'fab fa-spotify', link: 'https://open.spotify.com/user/315btxfzntnrr2l3mx6rplxl2ctm?si=af04e4436e4d4c65' },
  { icon: 'fab fa-instagram', link: 'https://instagram.com/ajanbaranimo' },
  { icon: 'fab fa-github', link: 'https://github.com/Baran12344' },
  { icon: 'fab fa-discord', link: 'https://discord.com/users/628260878495645726' },
]

export default function Home() {
 
  return (
    <>
      <div className="bg-neutral-800/10 shadow-xl rounded-lg w-full h-auto mt-6">
          <div className="relative">
            <div className="flex flex-col lg:flex-row justify-between w-full p-6 px-8 items-center h-full">
              <div className="flex flex-col lg:justify-start justify-center items-center lg:items-start mt-5 lg:mt-0 w-full">
                <div className="flex items-center">
                <p className="flex items-center text-white text-4xl font-semibold">
                  Baran TABAN
                </p>
                  <Tippy content={`Online`} animation="shift-away" arrow={false}>
                    <span className={`ml-2 text-online px-2 py-1 font-normal rounded-md text-sm`}>
                          <i className={`fa fa-circle text-online mr-2`} />Yaşıyor
                    </span>
                  </Tippy>
            
                </div>
                <p className="text-white/50 text-md mt-3">
                Merhaba, ben Baran. 18 yaşındayım ve İstanbul'da yaşıyorum. İstanbul Bahçelievler Teknik ve Meslek Lisesi'nden inşaat bölümü mezunuyum. Şu sıralar İstanbul Maket Model adlı bir firmada çalışıyorum. Benimle ilgili daha çok bilgi edinmek için lütfen iletişim bölümünden benimle iletişime geçebilirsiniz.
                </p>
              </div>
              <div className={`order-first lg:order-last flex-shrink-0 relative w-[160px] h-[160px] rounded-full pulse-avatar-online `}>
                <img alt="baran" src={`https://media.discordapp.net/attachments/740334519705534484/1016001729629786153/deneme_foto.jpg?width=445&height=445`} width="160" height="160" className={`bg-neutral-700 w-[160px] h-[160px] rounded-full`} />
                <div className={`bg-[#040404] rounded-full px-[4px] py-[1px] flex items-center absolute bottom-0 right-4`}>
                  <Tippy content="Online" animation="shift-away" arrow={false}>
                    <i className={`fad fa-circle text-2xl text-online`} />
                  </Tippy>
                  <div>
                    public class MerhabaDunya {
    public static void main(String[] args) {
        System.out.println("Merhaba, Dünya!");
    }
}

                  </div>
                </div>
              </div>
              
            </div>
            <br></br>
            <span style={{ zIndex: '-1' }} className="text-white/5 absolute bottom-3 left-7 text-xl sm:text-2xl md:text-4xl lg:text-3xl font-semibold">Discord Bot Developer</span>
          </div>
      
      </div>
    </>
  )
}
