import { Tamagotchi } from '../src/tamagotchi.js/'

describe('Kuchipachi', () => {
  jest.useFakeTimers();
  let kuchipachi;

  beforeEach(function() {
    kuchipachi = new Tamagotchi("Kuchipachi");
    kuchipachi.setHunger();
    kuchipachi.setSleep();                                                    
  });

  afterEach(function() {
    jest.clearAllTimers();   
  });
    
  test('should have a name and set food/sleep/play levels to 10', () => {
         expect(kuchipachi.name).toEqual("Kuchipachi");
         expect(kuchipachi.foodLevel).toEqual(10);
         expect(kuchipachi.sleepLevel).toEqual(10);
         expect(kuchipachi.playLevel).toEqual(10);
  });
    
  test('should have a food level of 7 after 3001 milliseconds', () => {
         jest.advanceTimersByTime(3001);
         expect(kuchipachi.foodLevel).toEqual(7);
  });

  test('should get very hungry if the food level drops below six', function() {
         kuchipachi.foodLevel < 6;
         expect(kuchipachi.isHungry()).toEqual(true);
  });
   
  test('should be starving if 10 seconds pass without feeding', function() {
         jest.advanceTimersByTime(10001);
         expect(kuchipachi.isHungry()).toEqual(true);
     });
   
  test('should have a food level of ten if it is fed', function() {
         jest.advanceTimersByTime(9001);
         kuchipachi.feed();
         expect(kuchipachi.foodLevel).toEqual(10);
       });
  
  test('should have a sleep level of 5 after 10001 milliseconds', () => {
         jest.advanceTimersByTime(10001);
         expect(kuchipachi.sleepLevel).toEqual(5);
       });

  test('should get sleepy if sleep level is at five or less', function(){
         kuchipachi.sleepLevel <= 5;
         expect(kuchipachi.isTired()).toEqual(true);
       });

  test('should be very tired if 20 seoncds pass without sleep', function() {
         jest.advanceTimersByTime(20000);
         expect(kuchipachi.isHungry()).toEqual(true);
       });

  test('should have a sleep level of 10 if it sleeps', () => {
         jest.advanceTimersByTime(19001);
         kuchipachi.sleep();
         expect(kuchipachi.sleepLevel).toEqual(10);

       });
  });