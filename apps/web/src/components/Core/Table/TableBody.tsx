import { memo, useContext } from 'react';
import { TableContext } from '@/components/Core/Table/TableWrapper';

interface ITableRow {
  data: any;
  indexRow: number;
}

function TableRow({ data, indexRow }: ITableRow): JSX.Element {
  return (
    <tr
      className="border-semi-10-contrast border-b-solid border-b-[1px]"
      key={`bodyTable__${indexRow}` as string}>
      {data?.map(({ display }: any, indexCol: number) => (
        <td
          className="border-semi-10-contrast border-b-solid border-b-[1px]"
          key={`bodyTable__${indexCol}` as any}>
          {display}
        </td>
      ))}
    </tr>
  );
}

const MemoizedTableRow = memo(TableRow);

function TableBody(): JSX.Element {
  const { getSortedTable } = useContext(TableContext);
  return (
    <tbody data-testid="tbody">
      {getSortedTable?.map((row: { display: any }[], indexRow: number) => (
        <MemoizedTableRow
          data={row}
          indexRow={indexRow}
          key={`bodyTable__${indexRow}` as string}
        />
      ))}
    </tbody>
  );
}

export default TableBody;
