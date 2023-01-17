import {AutoComplete} from "../components";

const TestAutoComplete = () => {
    const users = [
        {id: 1, firstName: 'Ali', lastName: 'Akbari'},
        {id: 2, firstName: 'Mohammad', lastName: 'Davoodi'},
        {id: 3, firstName: 'Dariush', lastName: 'Esmaeili'},
        {id: 4, firstName: 'Soheil', lastName: 'Rasooli'},
        {id: 5, firstName: 'Abbas', lastName: 'Salimi'},
    ];

    return (
        <AutoComplete items={users}
                      renderItem={(item) => <>{item.firstName + ' ' + item.lastName}</>}/>
    );
};

export default TestAutoComplete;
