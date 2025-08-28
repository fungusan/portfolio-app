import 'katex/dist/katex.min.css';
import { BlockMath, InlineMath } from 'react-katex';

export const MathBlock = ({ value }: { value: string }) => (
    <div className="my-4 overflow-x-auto">
        <div className="min-w-[100%] max-w-[100%] whitespace-nowrap px-4 py-2 flex justify-center">
            <BlockMath math={value} />
        </div>
    </div>
);

export const InlineMathComponent = ({ value }: { value: string }) => (
    <InlineMath math={value} />
);