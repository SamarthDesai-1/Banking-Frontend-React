import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PaidIcon from '@mui/icons-material/Paid';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import AddIcon from '@mui/icons-material/Add';
import '../style-css/Deshbord_Sidebar.css'
import { NavLink } from 'react-router-dom';


function Deshbord_Sidebar() {
    return (
        <div>
            <div className="sidenav">
                <div className="row">
                    <div className="tpart col-sm-12">
                        <div className="sidebar">

                            <div className="photo text-center pt-4">
                                <img src="./IMAGES/img6.jpg" width="100" height="100" style={{ borderRadius: '50%', objectFit: 'cover' }} />
                                <p className='mt-2'>Piyush dobariya</p>
                            </div>

                            <div className="menubar ">
                                <ul className='uimenu'>
                                    <li className='menuname'>
                                        <NavLink to="/Deshbord" className='linka'>Deshbord</NavLink>
                                        <HomeIcon style={{ position: "relative", left: "140px" }}></HomeIcon>
                                    </li>
                                    <li className='menuname'>
                                        <NavLink to="/User_Profile" className='linka'>UserProfile</NavLink>
                                        <AccountCircleIcon style={{ position: "relative", left: "134px" }}></AccountCircleIcon>
                                    </li>
                                    <li className='menuname'>
                                        <NavLink to="/Add_Money" className='linka'>Add Money</NavLink>
                                        <AddIcon style={{ position: "relative", left: "127px" }}></AddIcon>
                                    </li>
                                    <li className='menuname'>
                                        <NavLink to="/Withdrow" className='linka'>Withdrow Money</NavLink>
                                        <RemoveOutlinedIcon style={{ position: "relative", left: "85px" }}></RemoveOutlinedIcon>
                                    </li>
                                    <li className='menuname'>
                                        <NavLink to="/Account_Transfer" className='linka'>Transfer Fund</NavLink>
                                        <PaidIcon style={{ position: "relative", left: "109px" }}></PaidIcon>
                                    </li>
                                    <li className='menuname'>
                                        <NavLink to="/Transection" className='linka'>Transection</NavLink>
                                        <FileCopyIcon style={{ position: "relative", left: "122px" }}></FileCopyIcon>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Deshbord_Sidebar
