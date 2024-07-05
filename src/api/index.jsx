import Chance from 'chance';
const chance = Chance();

const fakeUserData =()=>{
    // console.log( chance.name({ middle_initial: true }));
    return  chance.name({ middle_initial: true });
}

export default fakeUserData;