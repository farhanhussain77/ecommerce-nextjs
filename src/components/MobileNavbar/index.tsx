import {Menu} from 'lucide-react';
import { useState } from 'react';

const MobileNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <div className="block lg:hidden" onClick={() => setIsOpen(prev => !prev)}>
                <Menu width={20} height={20} />
            </div>
            <div 
                className={`z-30 ${isOpen ? 'block !right-0' : '-right-[290px] hidden'} fixed top-0 transition-all duration-1000 bg-white h-screen w-[290px]`}
                style={{boxShadow: '-4px 0 10px rgba(0, 0, 0, 0.1)'}}
            >

            </div>
            {isOpen && (
                <div onClick={() => setIsOpen(false)} className='fixed top-0 left-0 bg-[#27272A]/20 h-screen w-full z-20' />
            )}
        </>
    )

}

export default MobileNavbar;