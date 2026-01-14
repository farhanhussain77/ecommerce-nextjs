
const TABS = ["New Arrival", "Bestseller", "Featured Products"];

const Tabs = ({selected, setSelected}:{selected: string, setSelected: (tab: string) => void}) => {
    return (
        <div className="flex xs:justify-normal justify-center">
            <div className="flex items-center xs:gap-4 gap-3 xs:justify-normal">

                {TABS.map((tab, idx) => {
                    return (
                        <div
                            key={idx}
                            onClick={() => setSelected(tab)}
                            role="button" 
                            className={`${selected === tab ? 'border-b border-b-2 border-b-black' : ''} hover: border-b-black hover:border-b hover:border-b-2`}
                        >
                            <p>{tab}</p>
                        </div>
                    )
                })}
            </div>
            
        </div>
    )
};


export default Tabs;