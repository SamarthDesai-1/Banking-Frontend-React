import React from 'react'
import '../../style-css/Admin/Ad_User_Transrction.css'

function Ad_User_Transrction() {
    return (
        <div>
            <div className='Transectiontable'>
                <h2 className='mb-3'>User Transection data</h2>
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                            <th scope="col">Profile</th>
                            <th scope="col">Transection</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                            
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Ad_User_Transrction
