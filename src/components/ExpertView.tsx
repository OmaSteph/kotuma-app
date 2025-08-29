import React from 'react'
import ExpertListView from '../components/ExpertListView'
import { Search } from 'lucide-react'
import KotumaMan from '@assets/kotuma-man.png'
import KotumaWoman from '@assets/kotuma-woman.png'
import ImgKabiruBello from '@assets/expert-images/kabiru-bello.png'
import ImgKwameMensah from '@assets/expert-images/kwame-mensah.png'
import ImgChineduOkafor from '@assets/expert-images/chinedu-okafor.png'
import ImgNandiKhumalo from '@assets/expert-images/nandi-khumalo.png'
import ImgKiptooCheruiyot from '@assets/expert-images/kiptoo-cheruiyot.png'
import ImgAmaBoateng from '@assets/expert-images/ama-boateng.png'
import ImgChiamakaNwosu from '@assets/expert-images/chiamaka-nwosu.png'
import ImgAishaBello from '@assets/expert-images/aisha-bello.png'
import ImgZainabOladuni from '@assets/expert-images/zainab-oladuni.png'

export interface Expert {
  id: number
  name: string
  profession: string
  location: string
  imageUrl: string
}

export interface ExpertViewProps {
  experts: Expert[]
  professionData: string[]
  selectedProfession: string
  onSelectProfession: (profession: string) => void
}

const expertProfessionData = [
  'All Experts',
  'Corporate Law',
  'Family Law',
  'Real Estate',
  'IP Law',
  'Criminal',
  'Employment',
  'Immigration'
]

const expertData = [
  {
    id: 1,
    name: 'Kabiru Bello',
    profession: 'Immigration Lawyer',
    location: 'Lagos, Nigeria',
    imageUrl: ImgKabiruBello
  },
  {
    id: 2,
    name: 'Kwame Mensah',
    profession: 'Family Lawyer',
    location: 'Volta, Ghana',
    imageUrl: ImgKwameMensah
  },
  {
    id: 3,
    name: 'Chinedu Okafor',
    profession: 'Real Estate Lawyer',
    location: 'Edo, Nigeria',
    imageUrl: ImgChineduOkafor
  },
  {
    id: 4,
    name: 'Nandi Khumalo',
    profession: 'Civil Litigation',
    location: 'Zulu, South Africa',
    imageUrl: ImgNandiKhumalo
  },
  {
    id: 5,
    name: 'Kiptoo Cheruiyot',
    profession: 'Employment Lawyer',
    location: 'Lamu, Kenya',
    imageUrl: ImgKiptooCheruiyot
  },
  {
    id: 6,
    name: 'Ama Boateng',
    profession: 'Criminal Lawyer',
    location: 'Akan, Ghana',
    imageUrl: ImgAmaBoateng
  },
  {
    id: 7,
    name: 'Chiamaka Nwosu',
    profession: 'Entertainment Lawyer',
    location: 'Lagos, Nigeria',
    imageUrl: ImgChiamakaNwosu
  },
  {
    id: 8,
    name: 'Aisha Bello',
    profession: 'Tax Lawyer',
    location: 'Abuja, Nigeria',
    imageUrl: ImgAishaBello
  },
  {
    id: 9,
    name: 'Zainab Oladuni',
    profession: 'Human Rights Lawyer',
    location: 'Lagos, Nigeria',
    imageUrl: ImgZainabOladuni
  }
]

const ExpertView: React.FC = () => {
  const [searchQuery, setSearchQuery] = React.useState('')
  const [selectedProfession, setSelectedProfession] =
    React.useState('All Experts')

  const normalizedQuery = searchQuery.trim().toLowerCase()
  const filteredExperts = React.useMemo(() => {
    return expertData.filter((expert) => {
      const matchesSearch = normalizedQuery
        ? [expert.name, expert.profession, expert.location]
            .join(' ')
            .toLowerCase()
            .includes(normalizedQuery)
        : true

      const matchesProfession =
        selectedProfession === 'All Experts'
          ? true
          : expert.profession
              .toLowerCase()
              .includes(selectedProfession.toLowerCase())

      return matchesSearch && matchesProfession
    })
  }, [normalizedQuery, selectedProfession])

  return (
    <>
      <section className='bg-[#080B1E] max-md:h-[598px]'>
        <div className='container mx-auto px-5 lg:px-16 grid md:pt-32 md:grid-cols-2 md:items-start md:gap-8 h-full'>
          <div className='flex flex-col gap-8 md:max-w-[490px] max-md:justify-center'>
            <div className='grid md:gap-3 text-center md:text-left'>
              <h1 className='text-3xl md:text-5xl lg:text-[57px] leading-16 font-medium text-[#E6D671]'>
                Meet Our Legal Experts
              </h1>
              <h2 className='text-base md:text-xl lg:text-[28px] text-[#FFF8FD] leading-9 font-normal font-neue max-md:max-w-[490px] max-md:mx-auto'>
                Verified by SCN - Every lawyer on Kotuma is a certified legal
                practitioner
              </h2>
            </div>
            <div className='relative'>
              <span className='absolute inset-y-0 left-0 flex items-center pl-3'>
                <Search className='w-5 h-5 text-gray-500' />
              </span>
              <input
                type='text'
                placeholder='Search by name, speciality, or location'
                className='w-full py-3 pl-10 pr-4 text-gray-900 rounded-md bg-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-kotumagold'
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          <div className='mt-10 md:mt-0 hidden md:flex items-end justify-center md:justify-end gap-4 relative'>
            <img
              src={KotumaMan}
              alt='Expert man'
              width={515}
              height={543}
              className='w-40 sm:w-56 md:w-[360px] lg:w-[515px] h-auto relative z-10 left-[11.5rem]'
            />
            <img
              src={KotumaWoman}
              alt='Expert woman'
              width={413}
              height={554}
              className='w-36 sm:w-48 md:w-[300px] lg:w-[413px] h-auto'
            />
          </div>
        </div>
      </section>
      <ExpertListView
        experts={filteredExperts}
        professionData={expertProfessionData}
        selectedProfession={selectedProfession}
        onSelectProfession={(p) => setSelectedProfession(p)}
      />
    </>
  )
}

export default ExpertView
