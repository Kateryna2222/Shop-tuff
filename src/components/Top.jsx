import Aside from './Aside';

const Top = ({sideComponent: SideComponent}) => {
    console.log(SideComponent);
    return (
        <div className="top">
            <Aside/>
            <SideComponent/>
        </div>
    );
};

export default Top;