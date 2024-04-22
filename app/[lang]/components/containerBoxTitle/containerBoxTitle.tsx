interface containerBoxTitleProps {
    title:string,
    isBottomLine?:boolean
}
export default function ContainerBoxTitle({title,isBottomLine = true}:containerBoxTitleProps) {
    return (
        <div className={'flex justify-start items-center gap-2  '+(isBottomLine ? 'border-b border-gray_200 pb-2' : 'pb-5') }>
            <div className={'bg-primary w-1 h-4'}/>
            <div className={'font-LGSMHATB text-gray_700 leading-[1.115rem]'}>{title}</div>
        </div>
    )
}