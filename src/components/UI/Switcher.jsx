import { useContext, useState } from "react";
import { GlobalContext } from "../../context";

const Switcher = () => {
    const { setTheme } = useContext(GlobalContext);
    const [darkMode, setDarkMode] = useState(false);
  
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        setTheme(!darkMode);
    };

    const modeText = darkMode ? "Light Mode" : "Dark Mode";
    const modeTextColor = darkMode ? "text-white" : "text-gray-700";

    return (
        <>
            <label className='flex cursor-pointer select-none items-center'>
                <div className='relative'>
                    <input
                        type='checkbox'
                        checked={darkMode}
                        onChange={toggleDarkMode}
                        className='sr-only'
                    />
                    <div className={`block h-8 w-14 rounded-full bg-[#4731D3] dark:bg-[#3A3A3A]`}></div>
                    <div className={`dot absolute left-1 top-1 h-6 w-6 rounded-full bg-[#FFE86E] transition ${darkMode ? 'transform translate-x-full' : ''}`}></div>
                </div>
            </label>
            <span className={modeTextColor}>{modeText}</span>
        </>
    );
}

export default Switcher;
