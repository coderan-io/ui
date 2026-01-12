declare module '*.module.css';
declare module '*.module.scss';

declare module '*.svg' {
    const content: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    export default content;
}
