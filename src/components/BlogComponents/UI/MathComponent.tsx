import 'katex/dist/katex.min.css';
import { BlockMath, InlineMath } from 'react-katex';

export const MathBlock = ({ value }: { value: string }) => (
    <div className="my-4 overflow-x-auto">
        <BlockMath math={value} />
    </div>
);

export const InlineMathComponent = ({ value }: { value: string }) => (
    <InlineMath math={value} />
);