import React from 'react';
import './table.css';


const Table = () => {
    return (
        <div>Table
            <p>Sort Table Rows by Clicking on the Table Headers - Ascending and Descending (jQuery)</p>
            <div class="container">

                <div class="table">
                    <div class="table-header">
                        <div class="header__item"><a id="name" class="filter__link" href="#">Name</a></div>
                        <div class="header__item"><a id="wins" class="filter__link filter__link--number" href="#">Wins</a></div>
                        <div class="header__item"><a id="draws" class="filter__link filter__link--number" href="#">Draws</a></div>
                        <div class="header__item"><a id="losses" class="filter__link filter__link--number" href="#">Losses</a></div>
                        <div class="header__item"><a id="total" class="filter__link filter__link--number" href="#">Total</a></div>
                    </div>
                    <div class="table-content">
                        <div class="table-row">
                            <div class="table-data">Tom</div>
                            <div class="table-data">2</div>
                            <div class="table-data">0</div>
                            <div class="table-data">1</div>
                            <div class="table-data">5</div>
                        </div>
                        <div class="table-row">
                            <div class="table-data">Dick</div>
                            <div class="table-data">1</div>
                            <div class="table-data">1</div>
                            <div class="table-data">2</div>
                            <div class="table-data">3</div>
                        </div>
                        <div class="table-row">
                            <div class="table-data">Harry</div>
                            <div class="table-data">0</div>
                            <div class="table-data">2</div>
                            <div class="table-data">2</div>
                            <div class="table-data">2</div>
                        </div>
                    </div>
                </div>
            </div>




            <div class="row-span-3 bg-white shadow rounded-lg">
                <div class="flex items-center justify-between px-6 py-5 font-semibold border-b border-gray-100">
                    <span>Passengers List</span>
                    {/* <!-- Refer here for full dropdown menu code: https://tailwindui.com/components/application-ui/elements/dropdowns --> */}
                </div>
                <div class="overflow-y-auto" >
                    <ul class="p-6 space-y-6">
                        <li class="flex items-center">
                            <div class="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                                <img src="https://randomuser.me/api/portraits/women/82.jpg" alt="Annette Watson profile picture" />
                            </div>
                            <span class="text-gray-600">Annette Watson</span>
                            <span class="ml-auto font-semibold">9.3</span>
                            <span class="ml-auto font-semibold">9.3</span>
                        </li>
                        <li class="flex items-center">
                            <div class="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                                <img src="https://randomuser.me/api/portraits/men/81.jpg" alt="Calvin Steward profile picture" />
                            </div>
                            <span class="text-gray-600">Calvin Steward</span>
                            <span class="ml-auto font-semibold">8.9</span>
                            <span class="ml-auto font-semibold">8.9</span>
                        </li>
                        <li class="flex items-center">
                            <div class="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                                <img src="https://randomuser.me/api/portraits/men/80.jpg" alt="Ralph Richards profile picture" />
                            </div>
                            <span class="text-gray-600">Ralph Richards</span>
                            <span class="ml-auto font-semibold">8.7</span>
                            <span class="ml-auto font-semibold">8.7</span>
                        </li>
                        <li class="flex items-center">
                            <div class="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                                <img src="https://randomuser.me/api/portraits/men/79.jpg" alt="Bernard Murphy profile picture" />
                            </div>
                            <span class="text-gray-600">Bernard Murphy</span>
                            <span class="ml-auto font-semibold">8.2</span>
                            <span class="ml-auto font-semibold">8.7</span>
                        </li>
                        <li class="flex items-center">
                            <div class="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                                <img src="https://randomuser.me/api/portraits/women/78.jpg" alt="Arlene Robertson profile picture" />
                            </div>
                            <span class="text-gray-600">Arlene Robertson</span>
                            <span class="ml-auto font-semibold">8.2</span>
                            <span class="ml-auto font-semibold">8.7</span>
                        </li>
                        <li class="flex items-center">
                            <div class="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                                <img src="https://randomuser.me/api/portraits/women/77.jpg" alt="Jane Lane profile picture" />
                            </div>
                            <span class="text-gray-600">Jane Lane</span>
                            <span class="ml-auto font-semibold">8.1</span>
                            <span class="ml-auto font-semibold">8.7</span>
                        </li>
                        <li class="flex items-center">
                            <div class="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                                <img src="https://randomuser.me/api/portraits/men/76.jpg" alt="Pat Mckinney profile picture" />
                            </div>
                            <span class="text-gray-600">Pat Mckinney</span>
                            <span class="ml-auto font-semibold">7.9</span>
                            <span class="ml-auto font-semibold">8.7</span>
                        </li>
                        <li class="flex items-center">
                            <div class="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                                <img src="https://randomuser.me/api/portraits/men/75.jpg" alt="Norman Walters profile picture" />
                            </div>
                            <span class="text-gray-600">Norman Walters</span>
                            <span class="ml-auto font-semibold">7.7</span>
                            <span class="ml-auto font-semibold">8.7</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Table