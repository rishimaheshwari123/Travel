import { Fragment, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react';
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid';
import border from './borderline.png';

const products = [
  { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
  { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
  { name: 'Security', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
  { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
  { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
];

const callsToAction = [
  { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
  { name: 'Contact sales', href: '#', icon: PhoneIcon },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Layout = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="shadow">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Global">
          <div className="flex items-center justify-between py-6 lg:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <a href="#">
                <h1 className="text-2xl font-bold text-gray-900">Raghuveer Travels</h1>
              </a>
            </div>
            <div className="-mr-2 -my-2 lg:hidden">
              <button
                onClick={() => setMobileMenuOpen(true)}
                type="button"
                className="inline-flex items-center justify-center p-2 text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              >
                <span className="sr-only">Open menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <Popover.Group as="nav" className="hidden space-x-10 lg:flex">
              <a href="/home" className="text-base font-medium text-gray-900 hover:text-gray-700">
                Home
              </a>
              {/* <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? 'text-gray-900' : 'text-gray-500',
                        'group inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                      )}
                    >
                      <span>Cars</span>
                      <ChevronDownIcon
                        className={classNames(
                          open ? 'text-gray-600' : 'text-gray-400',
                          'ml-2 h-5 w-5 group-hover:text-gray-500'
                        )}
                        aria-hidden="true"
                      />
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                          <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                            {products.map((item) => (
                              <a
                                key={item.name}
                                href={item.href}
                                className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                              >
                                <item.icon className="flex-shrink-0 h-6 w-6 text-indigo-600" aria-hidden="true" />
                                <div className="ml-4">
                                  <p className="text-base font-medium text-gray-900">{item.name}</p>
                                  <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                                </div>
                              </a>
                            ))}
                          </div>
                          <div className="px-5 py-5 bg-gray-50 sm:px-8 sm:py-8">
                            {callsToAction.map((item) => (
                              <div key={item.name} className="flow-root">
                                <a
                                  href={item.href}
                                  className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100"
                                >
                                  <item.icon className="flex-shrink-0 h-6 w-6 text-gray-400" aria-hidden="true" />
                                  <span className="ml-3">{item.name}</span>
                                </a>
                              </div>
                            ))}
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover> */}

              <a href="/aboutpage" className="text-base font-medium text-gray-900 hover:text-gray-700">
                About Us
              </a>
              <a href="/gallery" className="text-base font-medium text-gray-900 hover:text-gray-700">
                Gallery
              </a>
              {/* <a href="/dashboard" className="text-base font-medium text-gray-900 hover:text-gray-700">
                Dashboard
              </a> */}
              <a href="/services" className="text-base font-medium text-gray-900 hover:text-gray-700">
                Services
              </a>
              <a href="/contact" className="text-base font-medium text-gray-900 hover:text-gray-700">
                Contact
              </a>
            </Popover.Group>
            <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
              <a
                href="#form"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-black-600 px-4 py-2 text-base font-medium text-black shadow-sm"
              >
                Book Now
              </a>
            </div>
          </div>
        </nav>

        <Transition show={mobileMenuOpen} as={Fragment}>
          <Dialog as="div" className="fixed inset-0 z-40 lg:hidden" onClose={setMobileMenuOpen}>
            <div className="min-h-screen pb-12 flex flex-col bg-white shadow-lg">
              <div className="px-4 flex items-center justify-between" id='responsive'>
                <h1 className="text-2xl font-bold text-gray-900">Raghuveer Travels</h1>
                <button
                  type="button"
                  className="-mr-2 flex items-center justify-center p-2 text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flex-1 px-2 divide-y divide-gray-200">
                <div className="pb-6 space-y-1">
                  <a
                    href="/home"
                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50"
                  >
                    Home
                  </a>
                  <a href="/aboutpage"className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50" >
                    About Us
                  </a>
                  <a
                    href="/gallery"
                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50"
                  >
                    Gallery
                  </a>
                  <a
                    href="/services"
                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50"
                  >
                    Services
                  </a>
                  <a
                    href="/contact"
                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50"
                  >
                    Contact
                  </a>
                </div>
                <div className="pt-4 pb-4 bookbtn">
                  <a
                    href="#form"
                    className="block w-full"
                  >
                    <b>Book Now</b>
                  </a>
                </div>
                <a
                  href="/login"
                  className="block w-full"
                >
                  {/* <b>Login</b> */}
                </a>
              </div>
            </div>
          </Dialog>
        </Transition>
      </header>

      <Outlet />
    </>
  );
};

export default Layout;
