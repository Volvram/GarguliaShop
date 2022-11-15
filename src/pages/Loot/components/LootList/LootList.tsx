import React from "react";

import background_1 from "@assets/img/background_1.htm";
import LootListStore from "@store/LootListStore";
import { useQueryParamsStoreInit } from "@store/RootStore/hooks/useQueryParamsStoreInit";
import rootStore from "@store/RootStore/instance";
import { useLocalStore } from "@utils/useLocalStore";
import { observer } from "mobx-react-lite";
import ReactPaginate from "react-paginate";
import { useSearchParams } from "react-router-dom";

import LootContent from "./components/LootContent/LootContent";
import styles from "./styles.module.scss";

const LootList: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const lootListStore = useLocalStore(() => new LootListStore());
  useQueryParamsStoreInit();

  React.useEffect(() => {
    const initialPage = rootStore.query.getParam("page");
    if (initialPage) {
      lootListStore.setItemOffset(
        lootListStore.itemsPerPage * (Number(initialPage) - 1)
      );
    } else {
      lootListStore.setItemOffset(0);
    }
    lootListStore.changePage();
  }, [lootListStore]);

  const handlePage = React.useCallback(
    (event: { selected: number }) => {
      lootListStore.handlePageClick(event);
      searchParams.set("page", `${event.selected + 1}`);
      setSearchParams(searchParams);
      window.scrollTo(0, 0);
    },
    [searchParams, setSearchParams, lootListStore]
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
        forcePage={
          rootStore.query.getParam("page") !== undefined
            ? Number(rootStore.query.getParam("page")) - 1
            : 0
        }
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
