import { useEffect, useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import {useDispatch, useSelector} from 'react-redux'
import { userPage } from '../common/redux/action/pageListService'

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

export default function MainSection() {
  // const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  let dispatch = useDispatch()
  const pageList = useSelector(
    (state) => state.auth
    )?.page_list;

  useEffect(()=>{
    dispatch(userPage())
  },[])
  useEffect(()=>{

    console.log('pageList', pageList)
  },[pageList])

  return (
    <div className="bg-white">
 
      <div className="relative isolate px-6 pt-14 lg:px-8 bg">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative bg"
           
          />
        </div>
        <div className="mx-auto max-w-2xl py-20 sm:py-20 lg:py-30">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-white ring-1 ring-white hover:ring-white">
            STRUTRUAL ENGINEERING - Houston TX
              
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Licensed Structural & MEP Engineers 
            </h1>
            <p className="mt-6 text-lg leading-8 text-white">
            BuildEng LLC offers turnkey engineering solutions for residential and commercial projects. We provide   structural & MEP blueprints signed and sealed by Professional Engineers. Our team of experts are ready to offer you a free consultation.

            </p>
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl mt-3 mb-3">
            Residential & Commercial Buildings
            </h2>
            <p className="mt-0 text-md leading-8 text-white">
-Structural Inspection & Diagnosis Plan

            </p>
            <p className="mt-0 text-md leading-8 text-white">
-New Construction Design

            </p>
            <p className="mt-0 text-md leading-8 text-white">
-Remodeling & Addition 
            </p>
            <p className="mt-0 text-md leading-8 text-white">
-Foundation Inspection and Design
 
            </p>
            <p className="mt-0 text-md leading-8 text-white">
-Forensic Inspection Reports

 
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#contect"
                className="rounded-md bg-slate-500 px-4 py-2.5 text-lg font-semibold text-white shadow-sm hover:bg-slate-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600"
              >
                Free Consultation ‪(713) 623-1827 <span aria-hidden="true">→</span>
              </a>
              
            </div>
          </div>
        </div>
   
      </div>
    </div>
  )
}
