import React, {lazy, Suspense} from 'react';
import '../App.css'

//const RealMan = React.lazy(() => import('./RealManOther'));
// Lazy with timeout
const FakeMan = lazy(() => {
     return new Promise(resolve => {
         setTimeout(() => resolve(import('./RealManOther')), 3000);
     })
 })
export function ReactLazy() {
    return (
        <div>
            <br/>
            <Suspense fallback={<div id="loading">Hãy Đợi Đấy...</div>}>
                <div>
                    {/*<RealMan />*/}
                    <br/>
                    <FakeMan />
                </div>
            </Suspense>
            <br/>
        </div>
    );
}