export const codeBlock1 = `
/* 코드 블럭 1 - 간단한 custom hook 을 작성하여 해결 */
export const useScrollLockBody = (isOpen?: boolean) => {
  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);
};
`;

export const codeBlock2 = `
/* 코드 블럭 2 - 유틸리티 타입 추가 */
/* Array 안에 null을 체크해서 제거해주고 객체타입 반환 */
export type NonNullableObject<T extends GraphqlLetResponse>  = NonNullable<InferArray<Exclude<T, null | undefined>>>;

/* Array 안에 null을 체크해서 제거해주고 배열 타입 반환 */
export type ArrayTypeNullableCheck<T extends GraphqlLetResponse> = NonNullableObject<T>[];
`;

export const codeBlock3 = `const { data } = await paymentDataHistory({
  variables: { ... },
  fetchPolicy: 'no-cache',
});
if (data) {
  const { dataHistory } = data;
  if (!dataHistory) return;

  setResultData(dataHistory.payment_data);
}`;

export const codeBlock4 = `// before - index.tsx
const { data: productsByAdmin } = usePaymentQueryExamples({
    variables: { accessKey: Number(router.query.id)},
  });

  useEffect(() => {
    if (!productsByAdmin) return;
    else {
				...;
	     setData(productsByAdmin);
				...;
    }
  }, [productsByAdmin, router.query.id]);


// after - useDataQuery.ts
export const usePaymentQueryByAdmin = (accessKey: string) => {
  const { data, error } = usePaymentQueryExamples({ variables: { accessKey }});
  return { data, error };
};

// index.tsx
const { data, error } = usePaymentQueryByAdmin(keyValue);

useEffect(() => {
  if (!data) return;
  setTableData(data);
}, [data, keyValue]);

`;
