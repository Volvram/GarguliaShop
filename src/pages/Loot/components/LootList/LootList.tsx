import React from "react";

import background_1 from "@assets/img/background_1.htm";
import LootListStore from "@store/LootListStore";
import { useLocalStore } from "@utils/useLocalStore";
import { observer } from "mobx-react-lite";
import ReactPaginate from "react-paginate";
import { useSearchParams } from "react-router-dom";

import LootContent from "./components/LootContent/LootContent";
import styles from "./styles.module.scss";

const LootList: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const lootListStore = useLocalStore(() => new LootListStore());

  React.useEffect(() => {
    // const initialPage = rootStore.query.getParam(queryParamsEnum.page);
    // if (initialPage) {
    //   lootListStore.setItemOffset(
    //     lootListStore.itemsPerPage * (Number(initialPage) - 1)
    //   );
    // } else {
      lootListStore.setItemOffset(0);
    // }
    lootListStore.changePage();
  }, []);

  const handlePage = React.useCallback(
    (event: { selected: number }) => {
      lootListStore.handlePageClick(event);
      searchParams.set("page", `${event.selected + 1}`);
      setSearchParams(searchParams);
    },
    [searchParams]
  );

  return (
    <div
      className={styles.lootList}
      style={{ backgroundImage: `url(${background_1})` }}
    >
      <LootContent currentItems={lootListStore.currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePage}
        // forcePage={
        //   rootStore.query.getParam(queryParamsEnum.page) !== undefined
        //     ? Number(rootStore.query.getParam(queryParamsEnum.page)) - 1
        //     : 0
        // }
        pageRangeDisplayed={3}
        pageCount={lootListStore.pageCount}
        previousLabel="<"
        renderOnZeroPageCount={undefined}
        containerClassName={`${styles.paginator}`}
        activeClassName={`${styles.paginator_li_active}`}
        previousClassName={`${styles.paginator_li}`}
        pageClassName={`${styles.paginator_li}`}
        breakClassName={`${styles.paginator_li}`}
        nextClassName={`${styles.paginator_li}`}
      />
    </div>
  );
};

export default observer(LootList);
