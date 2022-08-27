import React from 'react';
// import inventoryList from '../../inventoryData/inventoryList';

const Inventory = (props) => {

    // const renderPlant = (plant) => {
    //     return (
    //         <tr>
    //             <td>{plant.plantName}</td>
    //             <td>{plant.plantSize}</td>
    //         </tr>
    //     )
    // }
    return(
        <div id="inventory" className='inventory-div cover-container d-flex flex-column justify-content-center align-items-center align-content-center'>
            <h1 className='pb-5'>Inventory</h1>
            <div class="table-wrapper-scroll-y my-custom-scrollbar">
                <table class="table table-light table-borderless table-striped table-hover mb-0">
                    <thead>
                        <tr>
                            <th scope="col">Plant Name</th>
                            <th scope="col">Size</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th colspan="3" class="table-active">Flowers</th>
                        </tr>
                        {/* {inventoryList.plantName === 'flower' && inventoryList.available === true ? 
                        (inventoryList.map(renderPlant)) : console.log("oops something went wrong") }
                        <tr>
                            <td>
                                {inventoryList.plantName}
                            </td>
                        </tr> */}
                        <tr>
                            <th colspan="3" class="table-active">Palms</th>
                        </tr>
                        <tr>
                            <td>Plant Name</td>
                            <td>Size</td>
                        </tr>
                        <tr>
                            <td>Plant Name</td>
                            <td>Size</td>
                        </tr>
                        <tr>
                            <td>Plant Name</td>
                            <td>Size</td>
                        </tr>
                        <tr>
                            <td>Plant Name</td>
                            <td>Size</td>
                        </tr>
                        <tr>
                            <td>Plant Name</td>
                            <td>Size</td>
                        </tr>
                        <tr>
                            <th colspan="3" class="table-active">Shrubs</th>
                        </tr>
                        <tr>
                            <td>Plant Name</td>
                            <td>Size</td>
                        </tr>
                        <tr>
                            <td>Plant Name</td>
                            <td>Size</td>
                        </tr>
                        <tr>
                            <td>Plant Name</td>
                            <td>Size</td>
                        </tr>
                        <tr>
                            <td>Plant Name</td>
                            <td>Size</td>
                        </tr>
                        <tr>
                            <td>Plant Name</td>
                            <td>Size</td>
                        </tr>
                        <tr>
                            <td>Plant Name</td>
                            <td>Size</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Inventory;