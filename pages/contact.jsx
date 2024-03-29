import Head from 'next/head'
import Image from 'next/image'
import swr from '../lib/swr';


export default function Home() {
  const { data: _projects } = swr('/api/projects');
  const projects = _projects ? _projects : null;

  return (
    <>
      <div className="py-20">
        <p className="text-3xl text-white font-semibold text-center">İletişime Geç</p>
        <p className="text-xl text-white/50 font-normal text-center mb-5">Benim ile iletişime geçebileceğiniz diğer adresler.</p>
        <div className=" flex justify-center flex-col items-center">
            <div className="max-w-lg w-full">
                <a target="_blank" rel="norefferer" href=" https://instagram.com/ajanbaranimo">
                    <div className="flex justify-between bg-zinc-500/5 hover:bg-zinc-500/10 transition-all duration-200 px-4 py-2 rounded-lg items-center">
                        <i className="fab fa-instagram fa-2x" />
                        <p className="font-semibold text-xl">@ajanbaranimo</p>
                    </div>
                </a>
                 <a target="_blank" rel="norefferer" href="https://api.whatsapp.com/send?phone=905372732947">
                     <div className="mt-2 flex justify-between bg-zinc-500/5 hover:bg-zinc-500/10 transition-all duration-200 px-4 py-2 rounded-lg items-center">
                         <i className="fab fa-whatsapp fa-2x" />
                         <p className="font-semibold text-xl">Whatsapp</p>
                     </div>
                 </a>
                <a target="_blank" rel="norefferer" href="https://discord.com/users/628260878495645726">
                    <div className="mt-2 flex justify-between bg-zinc-500/5 hover:bg-zinc-500/10 transition-all duration-200 px-4 py-2 rounded-lg items-center">
                        <i className="fab fa-discord fa-2x" />
                        <p className="font-semibold text-xl">menyak çocuk#1766</p>
                    </div>
                </a>
                <a href="mailto:barantaban98@gmail.com">
                    <div className="mt-2 flex justify-between bg-zinc-500/5 hover:bg-zinc-500/10 transition-all duration-200 px-4 py-2 rounded-lg items-center">
                        <i className="fa fa-envelope fa-2x" />
                        <p className="font-semibold text-xl">barantaban98@gmail.com</p>
                    </div>
                </a>
            </div>
        </div>
      </div>
    </>
  )
}
