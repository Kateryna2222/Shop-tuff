import Aside from './Aside';

const Top = ({sideComponent: SideComponent}) => {
    return (
        <div className="top">
            <Aside/>
            <SideComponent/>
        </div>
    );
};

export default Top;